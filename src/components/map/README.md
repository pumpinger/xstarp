# SMap : 将谷歌地图API封装成高德地图API的接口

## 实现原理：

- SMap为给外部统一的接口。GMap为对Google map的封装。API全部依照高德地图API。
- 输入高德地图数据。
- SMap API 运行后会将高德数据包装成SMap的对象obj。
- 这个对象内部有一个属性 <code>_inner</code> 即：<code>obj._inner</code> 为实际的 Google Map 对应的API生成的 Google Map对象。 
- 每个SMap
