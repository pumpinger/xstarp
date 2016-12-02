
/**
 * 命名大意：
 * dom    用户定义承载树的dom
 * html   树的html
 * item   data的每一条,可以是node也可以是child
 * child  树的叶子;子元素;成员
 * node   树的节点;文件夹;部门
 * layer  树的层级,包含同一层的item(node,child);
 * _      带有下划线的是插件需要的方法属性，用户不需要使用
 *
 *
 *
 *
 *
 * 备注：
 * 1.这里html的input显示的时候根据data决定是否check，
 * 2.每次的点击input产生的变化是html变了，然后data也变。
 * 1，2导致容易出错
 * 但我觉得应该是根据操作data数据发生变化，变化完毕，统一一个方法决定html结构的变化，不过效率不一定更高
 *
 *
 * 思路:
 * 1.node的id和child的id可以重复,因为实际场景可能是两种数据比如,部门和人员.对于省份和城市可能本身就不会重复
 * 2.选择数据,用户需要的结果是:1.所有child.2.node+child
 * 3.is_trigger如果是true,是为input框设计的,会去读取input框的宽度作为自身的宽度
 *
 *
 *
 *
 */
;(function ($) {


    var defOpt = {
        is_trigger:true,  //是否需要触发? 否则直接显示
        has_search:false,
        only_child:true,//是否结果只要 child
        node_merge:true,//是否需要合并结果
        zIndex:1,
        choose:false,  //哪些是选中的？优先级高于data  {nodeId:[1,2,3],id:[1,2,3]}
        is_node_first:false,//是否需要节点排在前面  否则按照data的顺序
        is_multi:true,//是否多选
        expand:false, //是否展开，false、true、num
        rootId:0,
        width:null,
        maxHeight:null,
        data:[],
        onInit: function () {},
        onOpen: function () {}, //触发时
        onBeforeOpen: function () {},
        onClose: function (has_chg) {
        },
        onCheck: function (item,dom,childrenItem) {},
        onCancel: function (item,dom,childrenItem) {}
        //事件的命名空间 应该有配置项
        //data  单个的class icon
    };

    var searchTimer;//应该是this的属性

    window.xTree=function(opt){
        return new tree(opt);
    };


    var tree=function(opt){
        this.opt = $.extend(true,{},defOpt,opt);
        this._init(opt.dom);
        return this;  //这里只想暴漏 方法 怎么办？
    };




    tree.prototype={
        _is_open:false,
        _originId:false,
        _init:function(dom){
            this.dom = dom;

            this.data=this.opt.data;

            var res=checkData(this.data);
            if(!res){
                return false;
            }

            this.html=this._makePanel();


            this.opt.onInit();

            this._is_open=false;

            var that=this;


            if(this.opt.choose) {
                var choose=this.opt.choose;
                $.each(choose.nodeId,function (i,n){
                    var item={};
                    $.each(that.data,function(i2,n2){
                        if(n2.id == n  &&  n2.is_node == 1){
                            item=n2;
                            item.is_check=true;
                        }
                    });
                    that._chgAllChildren(item.id,item.is_check);
                });
                $.each(choose.id,function (i,n){
                    $.each(that.data,function(i2,n2){
                        if(n2.id == n && n2.is_node == false){
                            n2.is_check=true;
                        }
                    });
                });
            }

            this._originId=this.getId();


            if(this.opt.is_trigger){
                this.dom.off('click.treejs');
                this.dom.on('click.treejs', function (e) {
                    that.start();
                    e.stopPropagation();
                });

                $(document).on('click.treejs', function () {
                    that.end();
                });

            }
        },

        /**
         *      方法
         *
         */
        start:function(){
            this.opt.onBeforeOpen();
            this._showPanel();
            this._showData();
//                this._expand();
            this._is_open=true;
            this.html.find('.search_ipt_s').focus();
            this.opt.onOpen();
            return this;
        },
        end:function(){
            if(this._is_open){
                this.html.hide();
                this.dom.val(this.getName());
                var ids=this.getId();

                console.log(ids);
                console.log(this._originId);

                this._is_open=false;
                this.opt.onClose(!(ids==this._originId));
                this._originId=ids;
            }
        },


        getName:function(){
            var text=[];
            var data=this.data;
            if(this.opt.only_child){
                $.each(data,function(i,n){
                    if(n.is_check && !n.is_node){
                        text.push( n.name);
                    }
                });
            }else{
                var node=[];
                $.each(data,function(i,n){
                    if(n.is_check && n.is_node){
                        node.push( n.id);
//                            text.push( n.name);  //nodefirst
                    }
                });

                var clone= $.extend(true,[],data);
                $.each(clone,function(i,n){
                    if(    (n.is_check  &&  $.inArray(n.nodeId,node) != -1) || !n.is_check  ){
                        clone[i]=null;
                    }
                });

                $.each(clone,function(i,n){
                    if(n){
                        text.push( n.name);
                    }
                });

            }

            return text.join();
        },
        getId:function(){
            var id=[];
            var nodeId=[];
            var data=this.data;

            if(this.opt.only_child){
                $.each(data,function(i,n){
                    if(n.is_check && !n.is_node){
                        id.push( data[i].id);
                    }
                });

            }else{

                if(this.opt.node_merge){
                    var node=[];
                    $.each(data,function(i,n){
                        if(n.is_check && n.is_node){
                            node.push( n.id);
//                            text.push( n.name);  //nodefirst
                        }
                    });

                    var clone= $.extend(true,[],data);
                    $.each(clone,function(i,n){
                        if(    (n.is_check  &&  $.inArray(n.nodeId,node) != -1) || !n.is_check  ){
                            clone[i]=null;
                        }
                    });


                    $.each(clone,function(i,n){
                        if(n){
                            if(n.is_node){
                                nodeId.push( data[i].id);
                            }else{
                                id.push( data[i].id);
                            }
                        }
                    });
                }else{
                    $.each(data,function(i,n){
                        if(n.is_check){
                            if(n.is_node){
                                nodeId.push( data[i].id);
                            }else{
                                id.push( data[i].id);
                            }
                        }
                    });
                }



                id={'id':id,'nodeId':nodeId};
            }
            return id;
        },
        cancelItem:function (id,type){
            var item={};
            var dom=this.html.find('input[data-isNode="'+parseInt(type)+'"][data-id="'+id+'"]').prop('checked',false);
            $.each(this.data,function(i,n){
                if(n.id ==id  &&  n.is_node == type){
                    item=n;
                    item.is_check=false;
                }
            });

            this._chgItem(item,dom);

        },
        cancelAll:function (){
            $.each(this.data,function(index,item){
                item.is_check = false;
            });
            this.html.find('input').prop("checked",false);
            this.opt.onCancel();
        },
        checkItem:function (id,type){
            var item={};
            var dom=this.html.find('input[data-isNode="'+parseInt(type)+'"][data-i="'+id+'"]').prop('checked',true);
            $.each(this.data,function(i,n){
                if(n.id ==id  &&  n.is_node == type){
                    item=n;
                    item.is_check=true;
                }
            });

            this._chgItem(item,dom);

        },
        checkAll: function () {
            if(this.opt.is_multi){
                $.each(this.data,function(index,item){
                    item.is_check = true;
                });
                this.html.find('input').prop("checked",true);
                this.opt.onCheck();
            }
        },
        getItem:function(){
            var arr=[];
            var data=this.data;
            if(this.opt.only_child) {
                $.each(data, function (i, n) {
                    if (n.is_check && !n.is_node) {
                        arr.push(n);
                    }
                });
            }else{

                if(this.opt.node_merge){
                    var node=[];
                    $.each(data,function(i,n){
                        if(n.is_check && n.is_node){
                            node.push( n.id);
//                            text.push( n.name);  //nodefirst
                        }
                    });

                    var clone= $.extend(true,[],data);
                    $.each(clone,function(i,n){
                        if(    (n.is_check  &&  $.inArray(n.nodeId,node) != -1) || !n.is_check  ){
                            clone[i]=null;
                        }
                    });


                    $.each(clone,function(i,n){
                        if(n){
                            arr.push( n);
                        }
                    });
                }else {
                    $.each(data, function (i, n) {
                        if (n.is_check) {
                            arr.push(n);
                        }
                    });
                }


            }
            return arr;
        },
        search:function(val){
            this._removeLayer(this.opt.rootId);

            if(val===''){
                this.html.find('div[node-id="'+this.opt.rootId+'"]').remove();
                this._showLayer(this.opt.rootId);
            }else{
                for(var i in this.data){
                    if(  !this.data[i].is_node &&   this.data[i].name.indexOf(val) != -1){
                        this.html.find('div[node-id="'+this.opt.rootId+'"]').append(this._makeItem(this.data[i]));
                    }
                }
            }
        },


        /**
         *      视图方法
         */

        _showPanel:function(){
            if(this.opt.is_trigger){
                this.html.css({
                    top:this.dom.position().top+this.dom.outerHeight(),
                    left:this.dom.position().left,
                    minWidth:this.opt.width?this.opt.width:this.dom.outerWidth()
                });

                this.html.on('click', function (e) {
                    e.stopPropagation();
                });

                this.dom.after(this.html);

            }else{
                this.dom.append(this.html);
            }

        },
        _showData:function(){
            if( ! this.html.find('input[type="checkbox"]').length){
                this._showLayer(this.opt.rootId);
            }else{
                this.html.show();
            }
        },
        //_expand:function(){
        //    var obj = this;
        //    if(obj.opt.expand === true){
        //        $.each(obj.data,function(index,item){
        //            if(item.is_node){
        //                obj.html.find('div[node-id="'+item.id+'"] span[data-icon="expand"]').click();
        //            }
        //        });
        //    }else if(obj.opt.expand){
        //        var expandId = obj.opt.rootId;
        //        for (var i = 0; i < obj.opt.expand; i++) {
        //            expandId = obj._expandLevel(expandId);
        //        }
        //    }
        //},
        //_expandLevel:function(id){
        //    var obj = this;
        //    var expandId = [];
        //    $.each(id,function(index,item){
        //        $.each(obj.data,function(index2,item2){
        //            if(item2.nodeId===item){
        //                expandId.push(item2.id);
        //                obj.html.find('div[node-id="'+item2.id+'"] span[data-icon="expand"]').click();
        //            }
        //        });
        //    });
        //    return expandId;
        //},
        _showLayer:function(layer){
            var showData=this._getLayerData(layer);
            var itemDiv=makeLayer();


            //这里 0节点的结构 和 子节点的结构 没有处理好    以后尽量让node-id 和  itemdiv 分开
            if(layer===this.opt.rootId){
                itemDiv=$(itemDiv).attr('node-id',this.opt.rootId);
                this.html.append(itemDiv);
                //itemDiv.parent().attr('node-id',0);

            }else{
                this.html.find('div[node-id="'+layer+'"]').append(itemDiv);
                this.html.find('div[node-id="'+layer+'"] span:first').html(makeShrink());
            }

            for(var i in showData){
                itemDiv.append(this._makeItem(showData[i]));
            }
        },
        _removeLayer:function(layer){
            this.html.find('div[node-id="'+layer+'"]>div').remove();
            this.html.find('div[node-id="'+layer+'"] span:first').html(makeExpand());

        },




        /**
         *      数据方法
         */
        _getLayerData:function (parent){
            var res=[];
            for(var i in this.data){
                if(this.data[i].nodeId==parent){
//                if(data[i].is_node){
//                    res.unshift(data[i])
//                }else{
//                    res.push(data[i]);
//                }

                    res.push(this.data[i]);  //原序
                }
            }
            return res;
        },

        _chgItem:function(item,dom){

            if(this.opt.is_multi){
                if(item.is_node){
                    dom.parent().find('input').prop('checked',item.is_check);
                    this._chgAllChildren(item.id,item.is_check);
                }

                if(!item.is_check){
                    this._cancelParentNode(item.nodeId);
                }else{
                    this._checkParentNode(item.nodeId);
                }
            }else{
//                    this.html.find('input').prop("checked",false);
//                    $(this).prop('checked',true);
            }


            //todo  childArr 没有 考虑  onlychildren
            var  childArr=[];
            this._getChild(item,childArr);



            if(!item.is_check){
                this.opt.onCancel(item,dom,childArr);

            }else{
                this.opt.onCheck(item,dom,childArr);

            }


        },
        _getChild:function (node,cont) {
            var that=this;
            $.each(that.data,function(i,n){
                if(n.nodeId ==node.id ){
                    cont.push(n);
                    if(n.is_node){
                        that._getChild(n,cont);
                    }
                }
            })
        },
        _cancelParentNode:function(id){
            var obj=this;
            $.each(obj.data,function(i,n){
                if(n.id ==id && n.is_node && n.is_check){
                    n.is_check=false;
                    obj.html.find('input[data-isNode="1"][data-id="'+id+'"]').prop('checked',false);
                    obj._cancelParentNode(n.nodeId);
                }
            })
        },
        _checkParentNode:function(id){
            var obj=this;
            var allChildrenChecked = true;
            $.each(obj.data,function(i,n){
                if(n.nodeId==id && !n.is_check){
                    allChildrenChecked = false;
                }
            });
            $.each(obj.data,function(i,n){
                if(n.id == id && n.is_node && !n.is_check && allChildrenChecked){
                    n.is_check=true;
                    obj.html.find('input[data-isNode="1"][data-id="'+id+'"]').prop('checked',true);
                    obj._checkParentNode(n.nodeId);
                }
            });
        },
        _chgAllChildren:function(nodeid,bol){
            var obj=this;
            $.each($.extend(true,[], this.data),function(i,n){   //这句话 看起来 好像 不用 extend
                if(n.nodeId == nodeid){
                    obj.data[i].is_check=bol;
                    if(n.is_node){
                        obj._chgAllChildren(n.id,bol);
                    }
                }
            });
        },



        /**
         * 构造html内部方法
         */



        _makePanel:function(){
            var html='<div></div>';

            if(this.opt.has_search){
                html=this._makeSearch(html);
            }

            var css;
            if(this.opt.is_trigger){
                css={
                    'font-family':'Microsoft YaHei',
                    'z-index':this.opt.zIndex,
                    border:'1px solid #5d5d5d',
                    'background':'#fff',
                    position:'absolute',
                    maxHeight:this.opt.maxHeight,
                    'white-space':'nowrap',
                    'overflow':'auto'
                };
            }else{
                css={
                    'font-family':'Microsoft YaHei',
                    'background':'#fff',
                    maxHeight:this.opt.maxHeight,
                    'white-space':'nowrap',
                    'overflow':'auto'
                };
            }


            return $(html).css(css);
        },
        _makeSearch:function(html){
            var search='<input class="search_ipt_s" type="text" placeholder="搜索"/></div>';
            search=$(search).css({
                'border':'none',
                'padding':'4px 0',
                'margin':'5px 0 0 0'
            });

            var obj=this;
            $(search).on('keyup paste',function(){
                var dom=this;
                clearTimeout(searchTimer);
                searchTimer=setTimeout(function(){
                    obj.search(dom.value);
                },100);
            });

            return  $(html).append(search);

        },
        _makeNode: function (item) {
            var $html;
            if(this.opt.is_multi){
                $html = $('<div node-id="'+item.id+'">'+makeExpand()+'<input type="checkbox" data-isNode="1" data-id="'+item.id+'" '+(item.is_check?'checked':'')+' data-name="'+item.name+'"/><span>'+item.name+'</span></div>');
            }
            else{
                if(this.opt.only_child){
                    $html = $('<div node-id="'+item.id+'">'+makeExpand()+'<span>'+item.name+'</span></div>');
                }
                else{
                    $html = $('<div node-id="'+item.id+'">'+makeExpand()+'<input type="radio" name="'+ this.dom.selector +'" data-isNode="1" data-id="'+item.id+'" '+(item.is_check?'checked':'')+' data-name="'+item.name+'"/><span>'+item.name+'</span></div>');
                }
            }
            $html.find('span').css({
                'cursor':'pointer',
                'user-select':'none',
                '-webkit-user-select':'none',
                '-moz-user-select':'none',
                '-ms-user-select':'none'
            });
            var obj=this;
            $html.find('span').on('click',function(e){
                if(!$html.find('div')[0]){
                    obj._showLayer(item.id);
                }else{
                    obj._removeLayer(item.id);
                }
                //e.stopPropagation();
            });

            return $html;
        },
        _makeChild:function(item){
            var $html;
            if(this.opt.is_multi){
                $html = $('<div><span></span><label><input type="checkbox" data-id="'+item.id+'" data-isNode="0" data-name="'+item.name+'" '+(item.is_check?'checked':'') +'/>'+item.name+'</label></div>');
            }
            else{
                $html = $('<div>'+(this.opt.only_child?'':'<span></span>')+'<label><input type="radio" name="'+ this.dom.selector +'" data-id="'+item.id+'" data-isNode="0" data-name="'+item.name+'" />'+item.name+'</label></div>');
            }
            $html.find('span').css({
                'width':'16px',
                'user-select':'none',
                '-webkit-user-select':'none',
                '-moz-user-select':'none',
                '-ms-user-select':'none',
                'display':'inline-block'
            });
            $html.find('input').css({
                'padding':'2px 0 0 0'
            });
            return $html;
        },
        _makeItem:function(item){
            var $html;
            if(item.is_node){
                $html= this._makeNode(item);
            }else{
                $html= this._makeChild(item);
            }

            var obj=this;
            $html.find('input').on('click',function(){
                if(obj.opt.is_multi){
                    item.is_check=!item.is_check;
                }else{
                    $.each(obj.data,function(index,item){item.is_check = false;});
                    item.is_check=true;
                }


                obj._chgItem(item,$(this));

            });

            return $html;
        }


    };




    function makeLayer(){
        var html='<div></div>';

        return $(html).css({
            'margin-left':'13px'
        });
    }

    function makeExpand(){
        var html='<span data-icon="expand">＋</span>';
        //var html='<i class="iconfont icon-plus"></i>';

        return $(html).css({
            'font-size':'16px',
            'font-weight':'bold',
            'vertical-align':'text-bottom',
            'padding-right':'0px'
        })[0].outerHTML;
    }

    function makeShrink(){
        var html='<span data-icon="shrink">－</span>';
        //var html='<i class="iconfont icon-minus"></i>';

        return $(html).css({
            'font-size':'16px',
            'font-weight':'bold',
            'vertical-align':'text-bottom',
            'padding-right':'0px'
        })[0].outerHTML;
    }


    function checkData(data){
        for(var i in data){
            return typeof data[i] =='object';
        }
        return false;
    }



})($);




