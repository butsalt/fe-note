dd = {};

dd.isNumber = function(obj){
	return Object.prototype.toString.call(obj) == '[object Number]';
};

dd.isFunction = function(obj){
	return Object.prototype.toString.call(obj) == '[object Function]';
};

dd.isArray = function(obj){
	return Object.prototype.toString.call(obj) == '[object Array]';
};

dd.isDom = function(obj){
	return obj instanceof HTMLElement;
};

dd.toArray = function(obj){
	if(dd.isArray(obj)){
		return obj;
	}
	return [obj];
};

dd.loop = function(obj,handler){
	if(dd.isArray(obj)){
		var i,iLength;
		i=0;
		iLength = obj.length;
		for(;i<iLength;i++){
			if(handler(obj[i],i)===false){
				break;
			}
		}
	}else{
		for(var prop in obj){
			if(handler(obj[prop],prop)===false){
				break;
			}
		}
	}
};

dd.find = function(arr,handler){
	var index = -1;
	dd.loop(arr,function(d,i){
		if(handler(d,i)===true){
			index = i;
			return false;
		}
	});
	return index;
};

dd.extend = function(cls,superCls){
	var proto = Object.create(superCls.prototype);
	proto.superclass = superCls;
	proto.constructor = cls;
	cls.prototype = proto;
};

dd.el = function(dom){
	if(dom==null){
		dom = document.createElement('div');
	}
	if(dom.isEl){
		return dom;
	}
	if(dd.isDom(dom)){
		return new dd.El(dom);
	}
};

dd.El = function(dom){
	var me = this;
	me.dom = dom;
	me.events = {};
};

dd.El.prototype.isEl = true;
dd.El.prototype.el = function(){
	var me = this;
	var el = dd.el.apply(dd,arguments);
	me.dom.appendChild(el.dom);
	return el;
};
dd.El.prototype.addCls = function(cls){
	var me = this;
	var dom = me.dom;
	var clss = dom.className.split(' ');
	if(clss.indexOf(cls)==-1){
		dom.className += ' '+cls;
	}
	return me;
};
dd.El.prototype.removeCls = function(){
	var me = this;
	var dom = me.dom;
	var clss = dom.className.split(' ');
	var index = clss.indexOf(cls);
	if(index!=-1){
		clss.splice(index,1);
		dom.className = clss.join(' ');
	}
	return me;
};
dd.El.prototype.css = function(key,value){
	var me = this;
	if(value==null){
		return me.dom.style[key];
	}
	me.dom.style[key] = value;
	return me;
};
dd.El.prototype.width = function(value){
	var me = this;
	if(value==null){
		return me.dom.style.width;
	}
	if(dd.isNumber(value)){
		me.dom.style.width = value + 'px';
	}else{
		me.dom.style.width = value;
	}
	return me;
};
dd.El.prototype.offsetWidth = function(){
	var me = this;
	return me.dom.offsetWidth;
};
dd.El.prototype.offsetHeight = function(){
	var me = this;
	return me.dom.offsetHeight;
};
dd.El.prototype.height = function(value){
	var me = this;
	if(value==null){
		return me.dom.style.height;
	}
	if(dd.isNumber(value)){
		me.dom.style.height = value + 'px';
	}else{
		me.dom.style.height = value;
	}
	return me;
};
dd.El.prototype.on = function(type){
	var me = this;
	var types = type.split('.');
	if(!me.events[type]){
		me.events[type] = [];
	}
	var args = [types[0]];
	for(var i=1,iLength=arguments.length;i<iLength;i++){
		args.push(arguments[i]);
	}
	me.events[type].push(args);
	me.dom.addEventListener.apply(me.dom,args);
	return me;
};
dd.El.prototype.un = function(type){
	var me = this;
	var arr = me.events[type];
	delete me.events[type];
	arr.forEach(function(args){
		me.dom.removeEventListener.apply(me.dom,args);
	});
	return me;
};
dd.El.prototype.display = function(value){
	var me = this;
	if(value==null){
		return me.dom.style.display;
	}
	me.dom.style.display = value;
	return me;
};
dd.El.prototype.flex = function(value){
	var me = this;
	if(value==null){
		return me.dom.style.flex;
	}else{
		me.dom.style.flex = value;
	}
	return me;
};
dd.El.prototype.absolute = function(){
	var me = this;
	me.css('position','absolute');
	return me;
};
dd.El.prototype.absfit = function(){
	var me = this;
	me.css('position','absolute');
	me.css('top','0px');
	me.css('right','0px');
	me.css('left','0px');
	me.css('bottom','0px');
	return me;
};
dd.El.prototype.left = function(px){
	var me = this;
	if(px!=null){
		me.css('left',px+'px');
		return me;
	}
	return dd.trimPx(me.css('left'));
};
dd.El.prototype.top = function(px){
	var me = this;
	if(px!=null){
		me.css('top',px+'px');
		return me;
	}
	return dd.trimPx(me.css('top'));
};
dd.El.prototype.right = function(px){
	var me = this;
	if(px!=null){
		me.css('right',px+'px');
		return me;
	}
	return dd.trimPx(me.css('right'));
};
dd.El.prototype.bottom = function(px){
	var me = this;
	if(px!=null){
		me.css('bottom',px+'px');
		return me;
	}
	return dd.trimPx(me.css('bottom'));
};
dd.El.prototype.relative = function(){
	var me = this;
	me.css('position','relative');
	return me;
};
dd.El.prototype.fit = function(){
	var me = this;
	me.css('position','relative');
	me.css('width','100%');
	me.css('height','100%');
	return me;
};
dd.El.prototype.html = function(html){
	var me = this;
	if(html==null){
		return me.dom.innerHTML;
	}
	me.dom.innerHTML = html;
	return me;
};
dd.El.prototype.attach = function(el){
	var me = this;
	if(el.isEl){
		el.dom.appendChild(me.dom);
	}else{
		el.appendChild(me.dom);
	}
	return me;
};
dd.El.prototype.append = function(el){
	var me = this;
	if(el.isEl){
		me.dom.appendChild(el.dom);
	}else{
		me.dom.appendChild(el);
	}
	return me;
};

dd.trimPx = function(str){
	if(str==''){
		return 0;
	}
	return parseFloat(str.substring(0,str.length-2),10);
};

dd.observable=function(cls){
	var map = {};
	cls.prototype.on=function(type, handler, scope) {
		if(!map[type]){
			map[type] = [];
		}
		map[type].push({
			handler:handler,
			scope:scope
		});
    };
    
    cls.prototype.un=function(type, handler) {
    	var items = map[type];
        if(!items){
        	return;
        }
        var index = dd.find(items,function(item){
        	return item.handler === handler;
        });
        if(index===-1){
        	return;
        }
        items.splice(index,1);
    };
    
    cls.prototype.once = function(type,handler,scope){
    	var me = this;
    	var myHandler = function(){
    		me.un(type,myHandler);
    		handler.apply(scope,arguments);
    	};
    	me.on(type,myHandler);
    };
	    
	    
    cls.prototype.fire=function(type, args) {
    	var items = map[type];
    	if(!items){
    		return;
    	}
    	items.slice(0).forEach(function(item){
    		item.handler.apply(item.scope,args);
    	});
	};
};