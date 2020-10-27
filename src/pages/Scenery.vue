<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="广州塔 Canton Tower" name="1">
      <div>又称广州新电视塔，昵称小蛮腰。位于广州市海珠区（艺洲岛）赤岗塔附近，距离珠江南岸125米，与珠江新城、花城广场、海心沙岛隔江相望。广州塔塔身主体高454米，天线桅杆高146米，总高度600米。是中国第一高塔，世界第二高塔，仅次于东京晴空塔，是国家AAAA级旅游景区。</div>
      <div>广州塔塔身168~334.4米处设有“蜘蛛侠栈道”，是世界最高最长的空中漫步云梯。塔身422.8米处设有旋转餐厅，是世界最高的旋转餐厅。塔身顶部450~454米处设有摩天轮，是世界最高摩天轮。天线桅杆455~485米处设有“极速云霄”速降游乐项目，是世界最高的垂直速降游乐项目。天线桅杆488米处设有户外摄影观景平台，是世界最高的户外观景平台，超越了迪拜哈利法塔的442米室外观景平台，以及加拿大国家电视塔447米的“天空之盖”的高度</div>
      <img src="../../static/images/CantonTower.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="沙面岛 Shamian Island" name="2">
      <div>沙面岛是AAAAA级风景区。其位于广州市区西面、珠江白鹅潭畔，是广州著名的外事游览区和历史文物保护区，有露德天主教圣母堂、苏联领事馆、汇丰银行等景点</div>
      <div>沙面岛，可能是中国最富有欧陆风情的地方，位于广州市区西面、广州市荔湾区人民桥西侧、珠江白鹅潭畔，与六二三路以沙基涌相隔，较完整地保留19世纪英法租界欧陆风情风貌，是广州著名的外事游览区和历史文物保护区。</div>
      <img src="../../static/images/ShamianIsland.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="上下九步行街 Shangxiajiu Pedestrian Street" name="3">
      <div>上下九步行街地处广州市荔湾区（俗称西关）的上九路、下九路、第十甫路之间，是广州市三大传统繁荣商业中心之一。全长约1237米，共有各类商业店铺238间和数千商户。在漫长的历史长河中，逐步形成了当今商业步行街中西合璧的四大西关风情特色，并构筑成一副独特的、绚丽多姿的西关风情画，营造出亮丽的旅游风景线。</div>
      <div>闻名遐迩的上下九商业街位于老城区西关，东起上下九路，西至第十甫西，横贯宝华路、文昌路，全长1237多米，全路段店铺林立、共有商店300多家，日客流量达60万次。荟萃了岭南文化中的老西关美食文化、岭南饮食文化和岭南民俗风情。</div>
      <div>上下九步行街的标志性建筑是连绵千米的骑楼街，骑楼适应南方炎热多雨气候，可以挡避风雨侵袭，挡避炎阳照射，造成凉爽环境。骑楼源自新加坡、香港等英属殖民地，广州的骑楼是清代两广总督张之洞参考西方国家和地区，特别是香港的经验而引入到广州的建筑。</div>
      <img src="../../static/images/ShangxiajiuPedestrianStreet.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="陈家祠 Chen Clan Ancestral Hall" name="4">
      <div>陈氏书院，俗称陈家祠，位于广州市中山七路。陈氏书院筹建于清光绪十四年（1888），二十年（1894）落成。陈氏书院是广东规模最大、装饰华丽、保存完好的传统岭南祠堂式建筑，被誉为“岭南建筑艺术明珠”，它集中了广东民间建筑装饰艺术之大成，巧妙运用木雕、砖雕、石雕、灰塑、陶塑、铜铁铸和彩绘等装饰艺术，是一座民间装饰艺术的璀璨殿堂。陈家祠的建筑雕塑饰件多达284件，包括石雕58件、木雕57件、灰塑57件、陶塑58件、砖雕41件、铜铁铸和壁画13件。陈家祠是全国重点文物保护单位。</div>
      <div>陈家祠也是广东民间工艺博物馆的所在地，是国家一级博物馆。馆内除长期设有《广东传统雕刻艺术》、《广东象牙雕刻艺术》、《广东刺绣》、《百年陈氏书院》、《旧广州家居》等展览外。还不定期展出各种广东民间工艺品，如石湾艺术陶、广州织金彩瓷、潮州金漆木雕、广绣、套色蚀花玻璃等。21世纪以来，陈氏书院以“古祠流芳”之名两度入选“新世纪羊城八景”，被誉为“广州文化名片”，成为岭南地区最具文化艺术特色的博物馆和著名的旅游景点。</div>
      <img src="../../static/images/ChenClanAncestralHall.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="石室圣心大教堂 Shishi Sacred Heart Cathedral" name="5">
      <div>广州石室圣心大教堂坐落于广州市区中心一德路。圣心大教堂于1863年6月18日圣心瞻礼日正式举行奠基典礼，故命名圣心大教堂。历时25年始建成，是天主教广州教区最宏伟、最具有特色的一间大教堂。石室圣心大教堂由法国设计师设计，中国工匠建造而成。</div>
      <div>教堂建筑总面积为2754平方米，东西宽35米，南北长78.69米，由地面到塔尖高58.5米，石室圣心大教堂1861年耗资40万法郎建立，可与闻名世界的法国巴黎圣母院相媲美。是天主教广州教区最大教堂，国内现存最宏伟的双尖塔哥特式建筑之一，东南亚最大的石结构天主教建筑，也是全球四座全石结构哥特式教堂建筑之一（另外三座是巴黎圣母院、威斯敏斯特教堂、科隆大教堂），由于教堂的全部墙壁和柱子都是用花岗岩石砌造，所以又称之为“石室”或“石室耶稣圣心堂”、“石室天主教堂”。1996年被公布为全国重点文物保护单位。是广东省重点文物保护单位。</div>
      <img src="../../static/images/ShishiSacredHeartCathedral.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="黄埔军校旧址 Whampoa Military Academy" name="6">
      <div>黄埔军校旧址位于中国广东省广州市黄埔区长洲岛内，原为清朝陆军小学和海军学校校舍。民国13年(1924年)6月16日，孙中山在苏联顾问帮助下，创办了培养军事干部的学校，为名“中国国民党陆军军官学校”而后更名为“中华民国陆军军官学校”迄今。军校群英荟萃，名将辈出，在中国近代史和军事史上具有重要意义。1988年旧址被定为国家级文物保护单位。</div>
      <div>2016年12月，黄埔军校旧址入选《全国红色旅游景点景区名录》。2017年12月2日，入选“第二批中国20世纪建筑遗产”。</div>
      <img src="../../static/images/WhampoaMilitaryAcademy.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="岭南印象园 Lingnan Impression" name="7">
      <div>岭南印象园位于广州大学城（小谷围岛）南部，原练溪村的区域内，总占地面积16.5 公顷，是集观光、休闲、娱乐、住宿、餐饮、购物，体验岭南乡土风情和岭南民俗文化的旅游景区。</div>
      <div>岭南印象园是典型的岭南传统风格建筑群落。民居依水而建，或窄门高屋，或镬耳高墙。悠长的青云巷、古朴的趟栊门、精致的满洲窗，小溪蜿蜒，池塘清澈，处处散发着岭南水乡的韵味。</div>
      <img src="../../static/images/LingnanImpression.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="长隆欢乐世界 Chime-Long Paradise" name="8">
      <div>长隆欢乐世界坐落在广州番禺迎宾路，占地面积2000多亩，游乐设施近70项。欢乐世界引进了瑞士、荷兰、德国、意大利、美国等全球领先的游乐设备公司的设备。</div>
      <div>其中包括：“全球过山车之王”垂直过山车、创吉尼斯世界纪录的十环过山车、荣获行业设计金奖的摩托过山车、超级大摆锤、东半球唯一的U型滑板等世界级巅峰游乐项目。</div>
      <img src="../../static/images/Chime-LongParadise.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="百万葵园 Largest Sunflower Garden" name="9">
      <div>百万葵园是中国首个将向日葵作为观赏性植物并设计成超大型主题园林的公园。百万葵园于2002年4月建成及对外开放，位于广州市南沙区新垦镇，占地面积26万平方米，种植一百万株向日葵，成为全国第一家全部采用进口种子（以日本为主）的观赏性向日葵乐园。当中包括百万葵花园外，还建起了全国首个有1000多只松鼠居住的松鼠乐园，以及蚂蚁王国和白鸽广场等景点。</div>
      <img src="../../static/images/LargestSunflowerGarden.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="华南植物园 SOUTH CHINA BOTANICAL GARDEN,CAS" name="10">
      <div>隶属于中国科学院，是中国重要的植物科学与生态科学研究机构之一。</div>
      <div>中国科学院华南植物园前身为国立中山大学农林植物研究所，由著名植物学家陈焕镛院士创建于1929年；1954年改隶中国科学院，同时易名为中国科学院华南植物研究所；2003年10月更名为中国科学院华南植物园；2008年，中国科学院华南植物园被国家旅游局评为国家AAAA级旅游景区。</div>
      <img src="../../static/images/SouthCHINABotanicalGarden.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
    <el-collapse-item title="白云山 Baiyun Mountain" name="11">
      <div>白云山，位于广东省广州市白云区，为南粤名山之一，自古就有“羊城第一秀”之称。山体相当宽阔，由30多座山峰组成，为广东最高峰九连山的支脉。面积20.98平方公里，主峰摩星岭高382米。</div>
      <div>白云山是广州市风景区行业的第一家国家AAAAA级旅游景区，也是广州市唯一同时拥有全国文明风景旅游区、国家AAAAA级旅游景区两项荣誉的景区。</div>
      <img src="../../static/images/BaiyunMountain.jpg" style="width:100%;height:auto;"/>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
    export default {
        name: "Scenery",
      data() {
        return {
          activeName: '1'
        };
      }
    }
</script>

<style scoped>

</style>
