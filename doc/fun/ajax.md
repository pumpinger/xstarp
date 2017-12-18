


# ajax封装

## 示例

````html
<span class="x-ajax-del x-button-middle x-button x-button-cadetblue"  data-url="./index.php" data-refresh=".x-table">删除</span>
<span class="x-ajax-op x-button-middle x-button x-button-cadetblue"  data-id="11">操作</span>
````



## API
- (1)有 x-ajax-del ,这个class 的 元素会绑定事件,点击之后发去请求 data-url,且成功后会刷新 data-refresh 的dom,默认值是 .x-table
- (2)有 x-ajax-op ,这个class 的 元素会绑定事件,点击之后发去请求 data-url


