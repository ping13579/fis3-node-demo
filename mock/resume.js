module.exports = function(req, res, next) {
    var data={
        resultCode:200,
        map:
            {
            Partid:'12345',
            PartStatus:'104',
            partName:'招女模特',
            logoUrl:'http://cdn.ufenqi.com/cms/img/mianxi_1000big.png',
            clickUrl:'http://m.ufenqi.com',
            moneny:'1240元/天',
            fangshi:'周结',
            address:'朝阳区 朝阳公园',
            tel:'987654efgh',
            date:'每周工作三天',
            dateTime:'8:00-9:00',
            num:'50',
            lastnum:'23',
            sex:'男',
            indeview:'需面试',
            dicript:'以电话形式对客户做售后的满意度回访',
            tel:'987654efgh'  
            },       
        province:[
            {
                name:'北京',
                provinceId:'28'
            },
            {
                name:'河北',
                provinceId:'29'
            },
            {
                name:'天津',
                provinceId:'30'
            },
            {
                name:'上海',
                provinceId:'31'
            }
        ],
        comment:{
            star:'3.5'
        },
        status:105
    };
    res.end(JSON.stringify(data));
};