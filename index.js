!function(){function t(t){var a=t.target;popup=L.popup().setLatLng(a.getLatLng()).setContent(a.myJsonData).openOn(e)}var e=new L.Map("map",{center:new L.LatLng(39.90459941926558,116.40700054358625),zoom:10}),a=(new L.tileLayer("http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",{minZoom:8,maxZoom:18,attribution:'&copy; 病例数据：<a href="http://wjw.gz.gov.cn/ztzl/xxfyyqfk/yqtb/">广州市卫健委</a>，<a href="http://wjj.foshan.gov.cn/zwgk/gsgg/tzgg/">佛山市卫健委</a>，<a href="http://wjw.sz.gov.cn/yqxx/index_1.htm">深圳市卫健委</a>；底图设计：<a href="https://stamen.com/">Stamen Design</a>；地图数据：<a href="https://www.openstreetmap.org/">OpenStreetMap</a>'}),new L.TileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamltbXl4dSIsImEiOiJjazZhdzNvbXgwcnBrM2hvM3c5YWtzcTJ2In0.LJiStMb2oLhbRPS_jiSoFw",{attribution:'数据来源：<a href="https://mp.weixin.qq.com/s/3-vaX3qS-ETg624GmC-AmA">北京疾病预防控制中心</a>；地图：<a href="https://www.mapbox.com/">Mapbox</a>、<a href="https://www.openstreetmap.org/">OpenStreetMap</a>',tileSize:512,zoomOffset:-1,minZoom:9,maxZoom:18}));e.addLayer(a),L.control.locate({position:"topleft",strings:{title:"定位到我的位置!",enableHighAccuracy:!0}}).addTo(e),data='[["林校路街道泰禾中央广场", 0, 116.316061, 39.713311], ["西红门镇瑞海家园二区", 0, 116.325556, 39.785236], ["广安门外街道红居南街1号院", 0, 116.334002, 39.88309], ["空港街道龙湖滟澜山", 0, 116.495324, 40.090515], ["北新桥街道后永康2巷", 0, 116.415454, 39.943965], ["西潞街道西潞东里小区", 0, 116.129084, 39.731988], ["展览路街道南营房社区", 0, 116.344591, 39.9184], ["张坊镇西白岱村", 0, 115.729963, 39.566588], ["天通苑北街道天通苑北一区", 0, 116.411455, 40.07528], ["黄村镇格林云墅", 0, 116.395247, 39.706721], ["旧宫镇润枫锦尚小区", 1, 116.42276087549727, 39.789332700075555], ["奥运村街道林萃路10号院", 0, 116.367885, 40.009102], ["月坛街道三里河三区", 0, 116.333069, 39.908204], ["观音寺街道双河南里", 0, 116.341044, 39.732821], ["庙城镇郑重庄村", 0, 116.610474, 40.284467], ["卢沟桥街道西府颐园", 0, 116.262257, 39.881679], ["北太平庄街道新街口外大街15号院", 0, 116.363644, 39.961939], ["北太平庄街道北京师范大学小区", 0, 116.346139, 39.971794], ["来广营乡驻华年", 0, 116.423173, 40.034385], ["北七家镇北亚花园社区", 1, 116.41523949361643, 40.12808507311287], ["瀛海镇金茂悦北区5号院", 0, 116.478579, 39.753994], ["月坛街道复兴门外大街甲20号", 0, 116.333539, 39.904956], ["亚运村街道安慧北里", 0, 116.40963, 39.995712], ["东高地街道万源南里小区", 0, 116.41956, 39.796002], ["将台乡芳园里小区", 0, 116.480192, 39.970933], ["田村路街道玉海园二里小区", 0, 116.248196, 39.918743], ["黄村镇格林云墅小区", 0, 116.397435, 39.706567], ["太平桥街道华源四里", 0, 116.313072, 39.879774], ["东坝乡恒大江湾", 0, 116.526404, 39.968663], ["月坛街道莲花池东路甲5号院", 1, 116.33251100469332, 39.89671575936882], ["十里堡镇河槽村", 0, 116.78284, 40.341404], ["丰台街道建国街一里", 0, 116.2867, 39.846172], ["高碑店乡陶家湾", 0, 116.524816, 39.904416], ["龙泽园街道龙泽苑东区", 0, 116.319709, 40.070572], ["新村街道富丰园", 0, 116.276728, 39.835824], ["右安门街道家和园小区", 1, 116.35447220487315, 39.85897474332488], ["新街口街道富国里", 0, 116.359411, 39.928581], ["玉泉北里2区", 0, 116.242836, 39.918246], ["胜利街道义宾南区", 0, 116.640452, 40.130197], ["体育馆路街道驹章胡同", 0, 116.419784, 39.88674], ["天通苑南街道天通东苑二区", 1, 116.43323031465526, 40.06408618383769], ["中关村街道中科院东南小区", 0, 116.317402, 39.977811], ["新村街道刘孟家园小区", 0, 116.296433, 39.836889], ["中关村街道软件小区", 0, 116.329018, 39.980263], ["丰台街道电报局街小区", 0, 116.283391, 39.849244], ["中关村街道知春路82号院小区", 0, 116.323855, 39.972854], ["马驹桥镇北门口村", 0, 116.547959, 39.7654], ["花乡地区刘孟家园小区", 0, 116.296433, 39.836889], ["高碑店北花园社区超级蜂巢", 0, 116.543119, 39.897181], ["南邵镇长滩壹号", 0, 116.268962, 40.196321], ["北新桥街道东直门北小街8号", 0, 116.420041, 39.946348], ["南苑街道南庭新苑北区", 1, 116.36275010568156, 39.805492659769754], ["于家务回族乡崔各庄村", 0, 116.708215, 39.692415], ["南磨房乡世纪东方嘉园", 0, 116.488057, 39.873182], ["八宝山街道鲁谷远洋山水", 0, 116.233262, 39.898158], ["东直门街道新中街18号", 0, 116.43381, 39.93459], ["花乡街道幸福家园小区东区", 0, 116.304312, 39.81682], ["五里坨街道西街天翠阳光新城", 0, 116.115619, 39.953109], ["兴丰街道瑞康家园小区", 0, 116.335564, 39.736549], ["北苑路86号嘉铭园", 0, 116.420479, 40.002725], ["紫竹院街道民族大学西路66号鑫德家园", 0, 116.31129, 39.947866], ["东铁营街道定安东里", 0, 116.408458, 39.860097], ["来广营乡明天第一城", 0, 116.406828, 40.048932], ["慈云寺北里", 0, 116.489166, 39.91709]]';var o=L.icon.pulse({iconSize:[16,16],color:"red"}),p=L.icon.pulse({iconSize:[16,16],fillColor:"purple",color:"purple"});dataObj=JSON.parse(data);for(var n=0;n<dataObj.length;++n){if(pt=dataObj[n],0==pt[1])(i=L.marker([pt[3],pt[2]],{icon:p,title:pt[0]}).addTo(e)).on("click",t),i.myJsonData=pt[0]}for(n=0;n<dataObj.length;++n){var i;if(pt=dataObj[n],1==pt[1])(i=L.marker([pt[3],pt[2]],{icon:o,title:pt[0]}).addTo(e)).on("click",t),i.myJsonData=pt[0]}}();