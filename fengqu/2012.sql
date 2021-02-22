/*
Navicat MySQL Data Transfer

Source Server         : 2012
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : 2012

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2021-02-05 19:59:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `registry`
-- ----------------------------
DROP TABLE IF EXISTS `registry`;
CREATE TABLE `registry` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registry
-- ----------------------------
INSERT INTO `registry` VALUES ('13', 'zhangsan', '897b99631295d204db13e863b296a09e70ab1d65', 'ef1fcf5562b');
INSERT INTO `registry` VALUES ('17', 'lisi', '755c001f4ae3c8843e5a50dd6aa2fa23893dd3ad', 'ef1fcf5562b');
INSERT INTO `registry` VALUES ('18', 'jinlixiang', 'a7259ce589498392923f6a08285da97d35674d00', 'ef1fcf5562b');
INSERT INTO `registry` VALUES ('19', 'prx', '62d0f59b1df3634412cceb717635b4f701e812f3', 'ef1fcf5562b');
INSERT INTO `registry` VALUES ('20', 'lzp', '20eabe5d64b0e216796e834f52d61fd0b70332fc', 'ef1fcf5562b');

-- ----------------------------
-- Table structure for `shoplist`
-- ----------------------------
DROP TABLE IF EXISTS `shoplist`;
CREATE TABLE `shoplist` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `picurl` varchar(200) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` float(7,2) NOT NULL,
  `piclisturl` varchar(1999) DEFAULT NULL,
  `lastprice` float(7,2) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `where` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoplist
-- ----------------------------
INSERT INTO `shoplist` VALUES ('1', 'https://img0.fengqucdn.com/sf/skuInfos/96005/28b159d0db4e85eb0ed0cfbce2ab7705.jpg@240W_240h.jpg', '美国Munchkin麦肯齐 电动搅奶器 多色混发', '95.00', 'https://img0.fengqucdn.com/sf/skuInfos/96005/28b159d0db4e85eb0ed0cfbce2ab7705.jpg@144h_144w.jpg,https://img0.fengqucdn.com/sf/skuInfos/96005/b57d65dad9d2512cbeb7b1c37403ca56.jpg@144h_144w.jpg,https://img0.fengqucdn.com/sf/skuInfos/96005/92b383114f57baffbbba9947584f608a.jpg@144h_144w.jpg,https://img0.fengqucdn.com/sf/skuInfos/96005/b516aec2eaff7a67f1da2030adad9539.jpg@144h_144w.jpg', '139.00', 'Munchkin麦肯齐', null);
INSERT INTO `shoplist` VALUES ('2', 'https://img0.fengqucdn.com/sf/skuInfos/1523823/ee6cabe981adf13c9c40a60b140776dc.jpeg@240W_240h.jpg', 'Enervite澳乐维他 纯羊奶粉 滋补养身增强体质400g/罐', '298.00', 'https://img0.fengqucdn.com/sf/skuInfos/1523823/ee6cabe981adf13c9c40a60b140776dc.jpeg@144h_144w.jpg,https://img0.fengqucdn.com/sf/skuInfos/1523823/f1cdffe8f95ab044999128120ba74fcc.jpeg@144h_144w.jpg,https://img0.fengqucdn.com/sf/skuInfos/1523823/4ebea11adc3e6906da41439df3b36b2e.jpeg@144h_144w.jpg', '308.00', 'Enervite澳乐维他', null);
INSERT INTO `shoplist` VALUES ('3', 'https://img0.fengqucdn.com/sf/skuInfos/1523828/b7487b3637d13088be60e944a3138e69.jpeg@240W_240h.jpg', 'Oz Good Dairy澳乐乳 老年牛奶粉 增强体质身体恢复快 1KG/袋', '178.00', 'https://img0.fengqucdn.com/sf/skuInfos/1523828/b7487b3637d13088be60e944a3138e69.jpeg@144h_144w.jpg,https://img0.fengqucdn.com/sf/skuInfos/1523828/e80d1f6e02266ef593e791f6da51a2c8.jpeg@144h_144w.jpg,https://img0.fengqucdn.com/sf/skuInfos/1523828/fa18ef8b8506884d4f96da404dbbc1bc.jpeg@144h_144w.jpg,https://img0.fengqucdn.com/sf/skuInfos/1523828/782d9671fa85c340e96987def57a0104.jpeg@144h_144w.jpg,https://img0.fengqucdn.com/sf/skuInfos/1523828/638f08b56f7b7d6989f161f64e5ee0c5.jpeg@144h_144w.jpg', '228.00', 'Oz Good Dairy澳乐乳', null);
INSERT INTO `shoplist` VALUES ('4', 'https://img0.fengqucdn.com/sf/skuInfos/1518447/03abb3e73a560e22cfaa587fc64e55eb.jpeg@240W_240h.jpg', '牧亚全脂骆驼乳粉 15g*20袋', '379.00', null, '231.00', '牧亚', null);
INSERT INTO `shoplist` VALUES ('5', 'https://img0.fengqucdn.com/sf/skuInfos/1517632/8fcdf7dddf7fe946b9d3e82db9a683c3.jpeg@240W_240h.jpg', 'Enervite澳乐维他乳铁蛋白30条*2g*2', '752.00', null, '796.00', 'Enervite澳乐', null);
INSERT INTO `shoplist` VALUES ('6', 'https://img0.fengqucdn.com/sf/bundefined/66851038f9c097111b5b2131f37d0c57.jpg@240W_240h.jpg', '荷兰Nutrilon  牛栏婴儿奶粉1段850g/罐 ', '120.00', null, '235.00', '荷兰Nutrilon', null);
INSERT INTO `shoplist` VALUES ('7', 'https://img0.fengqucdn.com/sf/skuInfos/1037384/69976b43ef37a7cce3734997f3f452e1.jpg@240W_240h.jpg', '沁园（TRULIVA）小白鲸Pro 800G净水器 家用直饮RO反渗透无桶大通量纯水机KRL5018', '3399.00', null, '3599.00', '沁园（TRULIVA', null);
INSERT INTO `shoplist` VALUES ('8', 'https://img0.fengqucdn.com/sf/skuInfos/1037470/32b160c577c9a49acddbfdfe25cd31a4.jpeg@240W_240h.jpg', '车用汽车腰靠记忆棉头枕枕头支撑座椅靠背垫汽车用品情人湾 头枕 活力橙 I-661MS-CH 单个价格', '109.00', null, '129.00', 'Munchkin麦肯齐', null);
INSERT INTO `shoplist` VALUES ('9', 'https://img0.fengqucdn.com/sf/skuInfos/1037383/b166b4b318fc32935fc62e323fecc81b.jpg@240W_240h.jpg', '瑞尚大尺寸电表箱装饰画免打孔晶瓷画北欧风格超长款配电箱遮挡电闸总开关轻奢挂画 石来运转C 140*70CM可覆盖（横130竖60)', '488.00', null, '561.00', 'Munchkin麦肯齐', null);
INSERT INTO `shoplist` VALUES ('10', 'https://img0.fengqucdn.com/sf/bundefined/56010646d9bb1cca1abe0e7ecae4a543.jpg@240W_240h.jpg', '汽车车载4L迷你小冰箱小型家车两用可爱冰箱宿舍mini电器 家车两用', '509.00', null, '581.00', 'Munchkin麦肯齐', null);
INSERT INTO `shoplist` VALUES ('11', 'https://img0.fengqucdn.com/sf/bundefined/115ade52826a167b5aa2740e0afd221f.jpg@240W_240h.jpg', '洁碧（Waterpik）冲牙器/水牙线/洗牙器/洁牙机 非电动牙刷 智简便携手持式 小火箭 GS10-1', '898.00', null, '909.00', 'Munchkin麦肯齐', null);
INSERT INTO `shoplist` VALUES ('12', 'https://img0.fengqucdn.com/sf/bundefined/4955304964bd718cac6438f1f57ba55a.jpg@240W_240h.jpg', '迈巴赫汽车用头枕奔驰睡觉靠枕座椅枕头车载腰靠一对护颈枕 头枕1对-卡宴棕', '369.00', null, '389.00', '荷兰Nutrilon', null);
INSERT INTO `shoplist` VALUES ('13', 'https://img0.fengqucdn.com/sf/bundefined/fc45f43983e6ab00e683d45d13c00701.jpg@240W_240h.jpg', '简高 苹果iphone12 Pro Max 5G手机钢化膜全屏覆盖屏幕苹果12mini防摔屏幕保护膜 iphone12ProMax【高清-抗摔升级】 1片装', '398.00', null, '405.00', '荷兰Nutrilon', null);
INSERT INTO `shoplist` VALUES ('14', 'https://img0.fengqucdn.com/sf/bundefined/7ba665ca076556f5d2bae1acc920055c.jpg@240W_240h.jpg', '简约笔记本电脑桌子 床上学习用家用升降可折叠移动床边桌子 暖白 图片显示尺寸', '199.00', null, '203.00', '荷兰Nutrilon', null);
INSERT INTO `shoplist` VALUES ('15', 'https://img0.fengqucdn.com/sf/bundefined/8781d74aa40b2a7c6f012bc351e2b2d6.jpg@240W_240h.jpg', '【12期免息】OPPO A93 5G新品手机90Hz 超清护眼屏 a92s升级版 oppoa93手机 极光（8GB+256GB)【优先发货】 官方标配【1年全国联保+晒单返20】', '1999.00', null, '2019.00', '荷兰Nutrilon', null);
INSERT INTO `shoplist` VALUES ('16', 'https://img0.fengqucdn.com/sf/skuInfos/1013292/8ed02fa12482548879123045ad40a47a.jpg@240W_240h.jpg', '厨房系列磨刀棒  家用菜刀磨刀器 厨师屠宰工具 凤凰系列磨刀棒', '115.00', null, '133.00', '荷兰Nutrilon', null);
INSERT INTO `shoplist` VALUES ('17', 'https://img0.fengqucdn.com/sf/skuInfos/1497406/e41195fc9b105cd165e7a2b48eb61820.jpeg@240W_240h.jpg', '卡通1.5米被套单件1.8x2.0米双人被罩200x230cm宿舍单人床被套 皇冠s 150*200cm 单件被套', '58.00', null, '60.00', '牧亚', null);
INSERT INTO `shoplist` VALUES ('18', 'https://img0.fengqucdn.com/sf/skuInfos/1496836/d65a770466ad0dd3a127fc8f17df4e71.jpeg@240W_240h.jpg', '电脑台式桌家用简约现代简易单人学生写字台卧室小桌子经济型书桌 A161 枫樱木 H形设计 宽敞台面', '269.00', null, '285.00', '牧亚', null);
INSERT INTO `shoplist` VALUES ('19', 'https://img0.fengqucdn.com/sf/skuInfos/1449132/6efea2463bb5a054fed096f9cc49afc3.jpeg@240W_240h.jpg', '电动电瓶摩托车头盔灰男女士四季通用冬季半盔轻便安全帽可爱韩版 浅灰色 灰色防雾护膝囗罩 均码', '118.00', null, '285.00', '牧亚', null);
INSERT INTO `shoplist` VALUES ('20', 'https://img0.fengqucdn.com/sf/skuInfos/1108284/26c62e895034cc26c5e12a27b481655b.jpeg@240W_240h.jpg', '通用增压花洒喷头热水器喷头淋雨家用浴室洗澡神器淋浴器软管套装 电镀单花洒+1.5米软管', '78.00', null, '100.00', '牧亚', null);
INSERT INTO `shoplist` VALUES ('21', 'https://img0.fengqucdn.com/sf/skuInfos/1404770/60a94defe5a178fee658b9890684e996.jpeg@240W_240h.jpg', '【30天试用】谢娜同款肚脐贴南京同仁堂艾草肚脐贴懒人艾脐贴南怀瑾艾脐贴大小肚子男女全身通用 【一盒装30丸+30贴】', '48.00', null, '60.00', '洁碧', null);
INSERT INTO `shoplist` VALUES ('22', 'https://img0.fengqucdn.com/sf/skuInfos/1267746/ec569fb6fdba999c4ce74163b12676e2.jpeg@240W_240h.jpg', '汽车前后保险杠防撞条 车用防擦条 防刮蹭胶条 车身装饰保护贴 黑色4条装', '59.00', null, '71.00', '洁碧', null);
INSERT INTO `shoplist` VALUES ('23', 'https://img11.360buyimg.com/jdcms/s150x150_jfs/t1/151093/23/15925/225536/6006841eEf285c42e/15286a1d19d99f2f.jpg.webp', 'Welly Merck（威利·默克）瑞士品牌WM手表男机械表全自动机械表简约时尚防水男士腕表生日礼物', '2480.00', null, '2500.00', '洁碧', null);
INSERT INTO `shoplist` VALUES ('24', 'https://img13.360buyimg.com/jdcms/s150x150_jfs/t1/112584/27/16972/214576/5f509137E08790d91/0bf229173a817875.jpg.webp', 's9车载MP3播放器多功能蓝牙接收器音乐U盘点烟器通用型车充电', '99.00', null, '109.00', '洁碧', null);
INSERT INTO `shoplist` VALUES ('25', 'https://img14.360buyimg.com/jdcms/s150x150_jfs/t1/152333/31/14994/172840/6002784fE6c52985c/9488d41858dc90fb.jpg.webp', '【二手99新】高配二手电脑组装机网吧吃鸡游戏主机直播家用电脑主机i5/i7八核1060台式机电脑全套 套餐4 吃鸡战神版（GTX960 2G吃鸡推荐）', '2599.00', null, '2699.00', '洁碧', null);
INSERT INTO `shoplist` VALUES ('26', 'https://img20.360buyimg.com/jdcms/s150x150_jfs/t1/114065/36/16542/317473/5f5090cbEbc8da778/3eb5e5986023b3aa.jpg.webp', '5寸圆形12V24V220多功能车载家用蓝牙音响低音炮音箱美声四季 5寸红色圆形12V24V220V蓝牙标配', '159.00', null, '178.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('27', 'https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/168500/6/3101/383957/60079addE55ee0870/6b1f540565058d33.jpg.webp', '足力健 老人羊毛鞋中筒加绒保暖雪地男女高帮靴子中老年人 ZLJ19603 蓝色（女款） 37', '269.00', null, '278.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('28', 'https://img11.360buyimg.com/jdcms/s150x150_jfs/t1/20775/13/7924/146688/5c70ebd8Eb287a06e/053353cf3ea3afc0.jpg.webp', '可站立电脑桌 简约现代台式笔记本家用多功能办公桌 101白枫木色', '179.00', null, '186.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('29', 'https://img12.360buyimg.com/jdcms/s150x150_jfs/t8971/311/5241739/673073/b7bdbd1b/599ea429N23af467c.jpg.webp', '喜临门椰棕床垫棕垫 软硬两用 维密Vimi 1200*1900*60', '699.00', null, '780.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('30', 'https://img30.360buyimg.com/jdcms/s150x150_jfs/t1/150466/32/15573/140498/60024ecaEdbe8aa04/8e0830b816a346db.jpg.webp', '<品牌直营> 天棚灯led灯泡e27螺口大功率节能灯家用超亮螺旋工厂车间仓库照明球泡单 5W螺口 其它  黄', '18.00', null, '34.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('31', 'https://img14.360buyimg.com/jdcms/s150x150_jfs/t1/100544/27/6021/135683/5df0b95cE19ccfcd4/dd8af308e53132b4.jpg.webp', '防尘袋衣服防尘罩挂式衣柜衣罩衣物西装套大衣罩羽绒服挂衣袋家用 雪花【半透】款1个装-立体印花防尘罩 大号【60*50*90cm】第二件', '52.00', null, '65.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('32', 'https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/135583/2/9005/142734/5f509113E0ec40fc2/dc95ff0390897174.jpg.webp', '车载蓝牙MP3 汽车MP3播放器插卡机U盘机蓝牙车载音响 黑色 标配', '169.00', null, '209.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('33', 'https://img30.360buyimg.com/jdcms/s150x150_jfs/t1/109638/35/5853/118316/5e426496E9fd0b250/243cfc3232c861e0.jpg.webp', '德国不锈钢大马士革钢菜刀家用厨房切菜刀切肉刀具厨师刀切片 德国不锈钢切菜刀', '150.00', null, '167.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('34', 'https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/85823/17/15845/213016/5e737b95E9267bef3/dc9c0c0572a63d28.jpg.webp', '创意早餐餐具一人食套装网红日式ins风碗碟盘子家用儿童单人北欧 一人食套装(黑线款)', '62.00', null, '72.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('35', 'https://img13.360buyimg.com/jdcms/s150x150_jfs/t1/140194/31/19745/30719/5fe1aad3E2e38c6e0/66024a755a5a24db.jpg.webp', '海信（Hisense）A7 阅读手机A7 6.7英寸水墨屏 电纸书阅读器 6GB+128GB 全网通5G手机 曜石黑', '1999.00', null, '2109.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('36', 'https://img10.360buyimg.com/jdcms/s150x150_jfs/t1/31246/4/14147/279875/5cbd7ca7Ec1684cc6/7837962659907a64.jpg.webp', '婴儿床凉席冰丝可水洗夏季新生儿童宝宝幼儿园午睡枕头席子套件 亲子鸡凉席套件 120*60', '109.00', null, '135.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('37', 'https://img20.360buyimg.com/jdcms/s150x150_jfs/t1/159785/8/415/124246/5feaf475E833ff0ed/b812ffa0b78ebb6e.jpg.webp', 'HKC/惠科 29英寸 WFHD高清 超窄边框 1500R 升降旋转 带鱼屏 21:9电竞游戏办公曲面显示器 C299Q', '997.00', null, '1007.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('38', 'https://img11.360buyimg.com/jdcms/s150x150_jfs/t1/157084/32/64/192585/5fe97cdeE79a905fe/4d95d7a88b6d38de.jpg.webp', '【品牌直营】新款节水带洗手盆抽水墙排马桶家用一体坐便洗手池250孔距座便 墙排马桶 标配 其他/other', '1538.00', null, '1560.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('39', 'https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/157171/4/4203/204369/600781beE1bf1b99b/d93d4533a5e33090.jpg.webp', '【千元机皇】轰天炮 W9S办公家用手机电脑投影仪 全高清1080p便携投影机智能3D迷你电视家庭影院  套餐一（安卓带wifi，无线上网，手机同屏）', '828.00', null, '840.00', 'Welly Merck（威利·默克）', null);
INSERT INTO `shoplist` VALUES ('40', 'https://img30.360buyimg.com/jdcms/s150x150_jfs/t1/144969/10/7419/99208/5f5090f2Ee43eb2e1/9bd61a741aee2cc8.jpg.webp', 'BC42车载mp3音乐播放器蓝牙接收器汽车点烟器式手机QC3.0快充 标配', '179.00', null, '200.00', 'Welly Merck（威利·默克）', null);

-- ----------------------------
-- Table structure for `usermessage`
-- ----------------------------
DROP TABLE IF EXISTS `usermessage`;
CREATE TABLE `usermessage` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `tel` varchar(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usermessage
-- ----------------------------
INSERT INTO `usermessage` VALUES ('1', '11111', '123456', '12345678910', 'zhangsan@126.com');
INSERT INTO `usermessage` VALUES ('2', '22222', '123456', '9048ead9080', 'zhangsan@126.com');
