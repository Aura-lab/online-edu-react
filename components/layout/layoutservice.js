import {AppMenuKeys} from "./appmenuconfig";

const getSecondaryPathString = (string) => {
    return string.split('/').pop()
};

class LayoutService{
    static getBreadcrumbName(path, query){
        const {id } = query;

        const secondaryPath = path.split("/")[2];
        if(secondaryPath === getSecondaryPathString(AppMenuKeys.editCourse)){
            return id ? "Edit Course" : "Add course";
        }else if (secondaryPath === getSecondaryPathString(AppMenuKeys.courseType)){
            return "Course Type";
        }else if (secondaryPath === getSecondaryPathString(AppMenuKeys.editStudent)){
            return id? "Edit Student" : "Add Student";
        }else if (secondaryPath === getSecondaryPathString(AppMenuKeys.studentSelection)){
            return "Selections";
        }
    }
    static getOpenKeys(path){
        const currentPath = path.split("/")[1];
        return ([currentPath])
    }
    static getSelectedKeys(path) {
        return [path];
    }
}

export default LayoutService;