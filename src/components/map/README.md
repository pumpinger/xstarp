# SMap : Super Map

Super Map 简称SMap。像使用高德地图一样使用Google地图、百度地图。拥有和高度地图一样的API接口实现。

写一套代码即可实现调用Google地图、高德地图、百度地图...

各家API之间的差异，都在SMap的代码中进行封装抹平。

（由于各家API的实现方式上的区别，还是有些差异的，有的API某度确实没有）

## 实现原理：

- SMap为给外部统一的接口。GMap为对Google map的封装。API全部依照高德地图API。
- 像高德地图API一样调用SMap API，输入高德地图数据。
- SMap API 运行后会将高德数据包装成SMap的对象。
- 每个构造函数生成的对象内部有一个属性 <code>_inner</code> 为实际的 Google Map （百度地图） 对应的API生成的 实例对象。 
- 当get 特定的对象时，SMap会对return的内容进行对应的包装，成为外部可用的SMap的各个实例对象，以实现外部的正常使用。
