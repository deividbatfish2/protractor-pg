"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectSingleton = /** @class */ (function () {
    function ProjectSingleton(projeto) {
        this._project = projeto;
    }
    ProjectSingleton.getDefault = function () {
        return ProjectSingleton._default._project;
    };
    Object.defineProperty(ProjectSingleton, "default", {
        set: function (projeto) {
            if (!ProjectSingleton._default) {
                ProjectSingleton._default = new ProjectSingleton(projeto);
            }
        },
        enumerable: true,
        configurable: true
    });
    return ProjectSingleton;
}());
exports.ProjectSingleton = ProjectSingleton;
