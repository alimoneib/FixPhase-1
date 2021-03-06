define({
    // matches an exact path
    home: { path: '/', moduleId: 'pages/home/home' },

    info: { path: '/project/:pid', moduleId: 'pages/projectInfo/projectInfo' },

    defects: { path: '/project/:pid/defects*', moduleId: 'pages/defects/defects' },


    defectView: { path: '/project/:pid/defect/:did', moduleId: 'pages/defectView/defectView' },

    defectCreate: { path: '/project/:pid/defect/create', moduleId: 'pages/defectCreate/defectCreate' },

    graphs: { path: '/project/:pid/graphs', moduleId: 'pages/graphs/graphs' },

    // matches everything else
    notFound: { path: '*', moduleId: 'page/notFound/notFound' }
});