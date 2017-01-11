<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/12/29
 * Time: 10:37
 */
include "layout_header.php";

?>
<script type="text/javascript" src="src/js/pop.js"></script>
<style>
    .pops{padding: 20px}
    .pops span{padding: 5px;background-color: #1aa094;border-radius: 3px;color: white;cursor: pointer}

</style>
<div class="x-panel">
    <div class="x-panel-title">弹窗：</div>
    <div class="x-panel-content">

        <p>示例：</p>

        <pre><code class="language-html"><textarea>
                <script>
                    $('.pop1').click(function () {
                        xPop('alert',{
                            title:'zhags',
                            context:'我们发货'
                        });
                    });
                    $('.pop2').click(function () {
                        xPop('confirm', {
                            context: '成功',
                            confirmfn: function () {
                                alert('点击了确定')
                            },
                            cancelfn:function () {
                                alert('点击了取消')
                            }
                        });
                    });
                    $('.pop3').click(function () {
                        xPop('tip',{
                            context:'一定时间后自动关闭',
                            time:500
                        });
                    });
                    $('.pop5').click(function () {
                        xPop('custom',{
                            title:'自定义',
                            width:'600px',
                            height:'100px',
                            context:'随便写给公会',
                            btn:[
                                {
                                    name:'取消',
                                    class:'cancel',
                                    isClose:true,
                                    fn:function () {
                                        alert('取消')
                                    }
                                },
                                {
                                    name:'确定33',
                                    class:'confirm',
                                    isClose:false,
                                    fn:function () {
                                        alert(2);
                                    }
                                },
                                {
                                    name:'确定',
                                    class:'confirm',
                                    fn:function () {
                                        alert(1);
                                    }
                                }
                            ]
                        })
                    });
                    $('.pop6').click(function () {
                        xPop('prompt',{
                            title:'请输入内容',
                            btn:[
                                {
                                    name:'取消',
                                    class:'cancel'
                                },
                                {
                                    name:'确定',
                                    class:'confirm'
                                }
                            ],
                            confirmfn:function () {
                                alert(443);
                            }

                        });
                    });
                    $('.pop7').click(function () {
                        xPop('message',{
                            context:'上弹出',
                            offset:'t',
                            btn:[
                                {
                                    name:'关闭',
                                    class:'cancel'
                                }
                            ]
                        })
                    });
                    $('.pop8').click(function () {
                        xPop('message',{
                            context:'上弹出',
                            offset:'rb',
                            btn:[
                                {
                                    name:'关闭',
                                    class:'cancel'
                                }
                            ]
                        })
                    });
                </script>
            </textarea></code>
        </pre>
        <div class="pops">
            <span class="pop1" id="pop1">提示(pop1)</span>
            <span class="pop2">确认(pop2)</span>
            <span class="pop3">消息(pop3)</span>
            <span class="pop5">自定义按钮(pop5)</span>
            <span class="pop6">输入框(pop6)</span>
            <span class="pop7">上弹出(pop7)</span>
            <span class="pop8">右下弹出(pop8)</span>
        </div>
        <p class="x-color-blue">规则:</p>
        <p>方法</p>
        <p>xPop('type',{option}) //type为弹窗类型，option为参数</p>
        <p>属性</p>
        <p>width:''; //弹窗的宽</p>
        <p>height:''; //弹窗的高，默认弹窗高度自适应</p>
        <p>content:'' //弹窗内容</p>
        <p>btn:[{name:'',class:''}]  //默认两个按钮，取消按钮盒确定按钮，type为custom自定义按钮个数</p>
        <p>confirmfn  //按钮class为confirm执行的函数</p>
        <p>cancelfn  //按钮class为cancel执行的函数</p>
    </div>
</div>
<script>
    $('.pop1').click(function () {
        xPop('alert',{
            title:'zhags',
            context:'我们发货'
        });
    });
    $('.pop2').click(function () {
        xPop('confirm', {
            context: '成功',
            confirmfn: function () {
                alert('点击了确定')
            },
            cancelfn:function () {
                alert('点击了取消')
            }
        });
    });
    $('.pop3').click(function () {
        xPop('tip',{
            context:'一定时间后自动关闭',
            time:500
        });
    });
    $('.pop5').click(function () {
        xPop('custom',{
            title:'自定义',
            width:'600px',
            height:'100px',
            context:'随便写给公会',
            btn:[
                {
                    name:'取消',
                    class:'cancel',
                    isClose:true,
                    fn:function () {
                        alert('取消')
                    }
                },
                {
                    name:'确定33',
                    class:'confirm',
                    isClose:false,
                    fn:function () {
                        alert(2);
                    }
                },
                {
                    name:'确定',
                    class:'confirm',
                    fn:function () {
                        alert(1);
                    }
                }
            ]
        })
    });
    $('.pop6').click(function () {
        xPop('prompt',{
            title:'请输入内容',
            btn:[
                {
                    name:'取消',
                    class:'cancel'
                },
                {
                    name:'确定',
                    class:'confirm'
                }
            ],
            confirmfn:function () {
                alert(443);
            }

        });
    });
    $('.pop7').click(function () {
        xPop('message',{
            context:'上弹出',
            offset:'t',
            btn:[
                {
                    name:'关闭',
                    class:'cancel'
                }
            ]
        })
    });
    $('.pop8').click(function () {
        xPop('message',{
            context:'右下弹出-你有新消息了',
            offset:'rb',
            btn:[
                {
                    name:'关闭',
                    class:'cancel'
                }
            ]
        })
    });
</script>

<?php

include "layout_footer.php";
?>
