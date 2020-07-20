import React,{useEffect, useState} from 'react';
import API from '../../lib/api'
import timeago from '../../lib/timeago';
import { Table, Space, Popconfirm, message, Pagination } from 'antd';
import Link from 'next/link'
import SearchBar from '../searchbar';
import Helper from "../../lib/helper";

const { Column } =Table;

function StudentList(){
    const [studentData, setStudentData] = useState([]);

    const [search, setSearch] = useState();
    const onSearch = (value) => {
        setPagination({...Pagination, current:1});
        setSearch(value);
    };


    const getSelectedCurriculum = (curriculuArrray) => {
        let array = curriculuArrray.map((item) => {
            return item["name"];
        });
        return array.toString();
    };


    const [updateCounter, setupdateCounter] = useState(0);
    const [loading, setLoading] = useState(false);
    const[pagination, setPagination] = useState({
        current: 1, pageSize: 10, showSizeChanger: true
    });
    const fetchData = async () => {
        setLoading(true);
        let params = Helper.paginationToUrlObject(pagination);
        if(search) {
            params['kw'] = search;
        }
        API.getStudentList(params).then((res) =>{
            let success = API.CheckAPIResult(res);
            if (!success) {
                setLoading(false);
                return;
            }
            let data = res.data.datas.map((item) => {
                return {
                    ...item,
                    key: item["id"],
                    joinTime: timeago.format(new Date(item["ctime"])),
                    getSelectedCurriculum: getSelectedCurriculum(item["courses"]),
                    studentType: item["type_name"],
                };
            });
            setPagination({
                ...pagination,
                total: res.data["pager"]["rowcount"],
            });
            setStudentData(data);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, [updateCounter, search]);

    const onDelete = async (student) => {
        const res = await API.deleteStudent({id: student["id"] });
        let success = API.CheckAPIResult(res);
        if (!success) {
            message.error(`Error occured: ${res[msg]}`);
            return;
        }
        message.success('Student Deleted');
        setupdateCounter(updateCounter + 1);
    };

    const onTableChange = (pagination, filters, sorter, extra) => {
        setPagination(pagination);
        setupdateCounter(updateCounter + 1);
    };

    return (
        <React.Fragment>
            <div style={{ width : "30%" }}>
                <SearchBar
                placeHolder="search by name"
                onSearch={onSearch}
                />
            </div>
            < br/>
            <Table dataSource={studentData} onChange={onTableChange} loading={loading} pagination={pagination}>
                <Column 
                title="ID" 
                dataIndex="id"
                key="id" />
                <Column 
                title="Area"
                dataIndex="address"
                key="address"
                width="10%"
                filters={[
                    { text:"新西兰", value:"新西兰" },
                    { text:"日本", value:"日本"},
                    { text:"中国", value:"中国" },
                ]}
                onFilter={(value, record) => record.address.includes(value)} />
                <Column title="Email" dataIndex="email" key="email" />
                <Column
                title="Selected Curriculum"
                dataIndex="selectedCurriculum"
                key="selectedCurriculum"
                width="25%"
                 />
                 <Column 
                 title="Student type"
                 dataIndex="studentTpye"
                 key="studentType"
                 width="15%"
                 filters={[
                     { text:"developer", value: "developer"},
                     { text:"tester", value:"tester"},
                    ]}
                    onFilter={(value, record) => record.studentType.includes(value)}
                 />
                 <Column title="Join Time" dataIndex="joinTime" key="joinTime"/>
                 <Column 
                 title="Action"
                 dataIndex="action"
                 render={(text, record) => (
                     <Space size="middle">
                         <Link href={`/students/editstudent?id=${record["id"]}`}>
                             <a>Edit</a>
                         </Link>
                         <Popconfirm
                         title="Do you confirm to delete this student?"
                         onConfirm={()=>{onDelete(record)}}
                         okText="yes"
                         cancelText="no"
                         >
                             <a>Delete</a>
                         </Popconfirm>
                     </Space>
                 )} />
            </Table>
        </React.Fragment>
    );
}
export default StudentList;