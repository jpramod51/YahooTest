"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    capabilities: {
        browserName: 'chrome'
        // browserName:'firefox'
    },
    //jasmineNodeOpts: {defaultTimeoutInterval: 10000},
    specs: ['../Features/Test.feature'],
    cucumberOpts: {
        require: 'Features/Step_Definations/StepDef.js',
        //format: 'json:./cucumberreports.json',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSVcsUUFBQSxNQUFNLEdBQVM7SUFDMUIsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFOUQsWUFBWSxFQUFDO1FBQ1QsV0FBVyxFQUFFLFFBQVE7UUFDeEIsd0JBQXdCO0tBQ3hCO0lBRUQsbURBQW1EO0lBQ25ELEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDO0lBRW5DLFlBQVksRUFBRTtRQUNYLE9BQU8sRUFBQyxzQ0FBc0M7UUFDN0Msd0NBQXdDO0tBRTNDO0NBQ0EsQ0FBQyJ9