const {override, fixBabelImports,addLessLoader} = require('customize-cra');
module.exports = override( 
    //针对antd实现按需打包：根据import来打包(babel-pplugin-import)
    fixBabelImports('import', { 
        libraryName: 'antd', 
        libraryDirectory: 'es', 
        style: true, //自动打包相关样式
    }), 
//更改less的变量
    addLessLoader({ 
        lessOptions:{
        javascriptEnabled: true, 
        modifyVars: {'@primary-color': '#1DA57A'}, 

        }    
    }),

         );

