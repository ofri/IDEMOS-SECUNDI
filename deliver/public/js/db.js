

dust.filters['time'] = function(a){
    return $.datepicker.formatDate('dd.mm.yy', new Date(Date.parse(a)));;
};


dust.renderArray = function(template,arr,callback,endCallback)
{
    var out_arr = [];
    var _err = null;
    for(var i=0; i<arr.length; i++)
    {
        dust.render(template,arr[i],function(err,out){
            if(callback)
                callback(err,out);
            if(err)
                _err = err;
            out_arr.push(out);
        });
    }
    if(endCallback)
        endCallback(_err,out_arr.join(''));
};


var db_functions = {

    loggedInAjax: function(options)
    {
        var onError = options.error || function()
        {
            console.log(arguments[2]);
        };
        options.error =  function (xhr, ajaxOptions, thrownError) {
            if(xhr.status == 401 && xhr.responseText == 'not authenticated'){
                connectPopup(function(){
                    onError(xhr,ajaxOptions,thrownError);
                });
            }
            else
                onError(xhr,ajaxOptions,thrownError);
        };
        $.ajax(options);
    },

    getHotObjects: function(callback){
        this.loggedInAjax({
            url: '/api/hot_objects',
            type: "GET",
            async: true,
            success: function (data) {
                console.log(data);

                callback(data);
            }
        });
    },

    //blogs
    getPopularArticles: function(limit_number,callback){
        this.loggedInAjax({
            url: '/api/articles?order_by=-popularity_counter&limit=' + limit_number,
            type: "GET",
            async: true,
            success: function (data) {
                //    console.log(data);
                callback( data);
            }
        });
    },

    getPopularHeadlines: function(limit_number,callback){
        this.loggedInAjax({
            url: '/api/headlines?limit=' + limit_number,
            type: "GET",
            async: true,
            success: function (data) {
                //   console.log(data);
                callback( data);
            }
        });
    },

    addKilkul: function(text_field, callback){
        this.loggedInAjax({
            url: '/api/kilkuls',
            type: "POST",
            async: true,
            data: {"text_field": text_field},
            success: function (data) {
                callback(null, data);
            }
        });
    },
    getSuccessStories: function(callback){
        this.loggedInAjax({
            url: '/api/success_stories',
            type: "GET",
            async: true,
            success: function (data) {
                callback(data);
            }
        });
    },
    getNotifications: function(callback){
        this.loggedInAjax({
            url: '/api/notifications?limit=3',
            type: "GET",
            async: true,
            success: function (data) {
                callback(data);
            }
        });
    },
    getAndRenderFooterTags:function()
    {
        this.loggedInAjax({
            url:'/api/tags?limit=10',
            type:'GET',
            async:true,
            success:function(data){
                dust.render('footer_tags',data,function(err,out)
                {
                    $('#footer_tags').append(out);
                });
            }
        });
    },

    getAllSubjects: function(callback){
        this.loggedInAjax({
            url: '/api/subjects',
            type: "GET",
            async: true,
            success: function (data) {
                $.each(data.objects,function(index,obj)
                {
                    obj.word_count = function()
                    {
                        return Math.min($.trim(obj.name).split(/\s+/).length,3);
                    };
                });
                callback(null,data);
            },
            error:function(data)
            {
                callback(data);
            }
        });
    },
    getHotInfoItems: function(offset,callback){
        this.loggedInAjax({
            url: '/api/information_items/?is_hot_info_item=true&limit=6&offset=' + offset,
            type: "GET",
            async: true,
            success: function (data) {
                callback(null,data);
            },
            error:function(data){
                callback(data);
            }
        });

    }   ,

    getUserShopingCart: function(callback){
        this.loggedInAjax({
            url: '/api/shopping_cart',
            type: "GET",
            async: true,
            success: function (data) {
                console.log(data);
                callback(null, data);
            }
        });
    },
    removeInfoItemFromShoppingCart: function(info_item_id, callback){
        this.loggedInAjax({
            url: '/api/shopping_cart/' + info_item_id,
            type: "DELETE",
            async: true,
            success: function () {
//                          removeInfoItemFromUserShoppingCart(info_item_index);
                callback(null)
                console.log('info item deleted from shopping cart');
            }
        });
    },

    createDiscussion: function(subject_id, subject_name, vision, title, tags, callback){
        this.loggedInAjax({
            url: '/api/discussions/',
            type: "POST",
            async: true,
            data: {"subject_id": subject_id, "subject_name": subject_name, "vision_text": vision, "title": title, "tags": tags, "is_published": true},
            success: function (data) {
                console.log(data);
                callback(null, data);
            },

            error:function(err){
                callback(err, null);
            }
        });
    },
    addSuggestionToDiscussion: function(discussion_id, parts, explanation, callback){
        this.loggedInAjax({
            url: '/api/suggestions/',
            type: "POST",
            async: true,
            data: {"discussion_id": discussion_id, "parts": parts, "explanation": explanation},
            success: function (data) {
                console.log(data);
                callback(null, data);
            },
            error:function(err){
                callback(err, null);
            }
        });
    },
    getPostByDiscussion: function(discussion_id, callback){
        this.loggedInAjax({
            url: '/api/posts?discussion_id=' + discussion_id,
            type: "GET",
            async: true,
            success: function (data) {
                console.log(data);
                callback(null, data);
            },
            error:function(err){
                callback(err, null);
            }
        });
    },



    voteForPost: function(post_id, method, callback){
        this.loggedInAjax({
            url: '/api/votes/',
            type: "POST",
            async: true,
            data: {"post_id": post_id, "method": method},
            success: function (data) {
                console.log(data);
                callback(null, data);
            },
            error:function(err){
                callback(err, null);
            }
        });
    },

    voteForSuggestion: function(suggestionId,method,callback)
    {
        this.loggedInAjax({
            url: '/api/votes_on_suggestion/',
            type: "POST",
            async: true,
            data: {"suggestion_id": suggestionId, "method": method},
            success: function (data) {
                console.log(data);
                alert('success');
                callback(null, data);
            },
            error:function(err){
                callback(err, null);
            }
        });

    },



    addPostToDiscussion: function(discussion_id, post_content, rafParentPostId,callback){
        this.loggedInAjax({
            url: '/api/posts/',
            type: "POST",
            async: true,
            data: {"discussion_id": discussion_id, "text": post_content},
            success: function (data) {
                console.log(data);
                callback(null, data);
            },
            error:function(err){
                callback(err, null);
            }
        });
    },

    getSortedPostByDiscussion: function(discussion_id, sort_by, callback){
        this.loggedInAjax({
            url: '/api/posts?discussion_id=' + discussion_id + "&order_by=" + sort_by,
            type: "GET",
            async: true,
            success: function (data) {
                console.log("posts are" + " " + data);
                callback(null, data);
            },
            error:function(err){
                callback(err, null);
            }
        });
    },

    getDiscussionShoppingCart: function(discussion_id, callback){
        this.loggedInAjax({
            url: '/api/discussions_shopping_cart?discussion_id=' + discussion_id,
            type: "GET",
            async: true,
            success: function (data) {
                //     console.log(data);
                callback(null, data);
            },

            error:function(err){
                callback(err, null);
            }
        });
    }

};

// handle image loading stuff

$(function(){

    $('#failureForm').live('submit', function(e){
        e.preventDefault();
        var feedbackTb=this.feedbackTb;
        if(feedbackTb.value.replace(/\s/g,"") == ""){
            return;
        }
        db_functions.addKilkul(this.feedbackTb.value ,function(error,data){
            if(error){
                console.log(error);
            }else{
                feedbackTb.value='';
            }
        });

    });
    db_functions.getAndRenderFooterTags();


    var callback = function(event){
        var target_element = event.srcElement || event.target;
        if(target_element){
            if($(target_element).is('.auto-scale'))
                image_autoscale($('img',target_element));
            else
            {
                var autoscale = $('.auto-scale',target_element);
                if(autoscale.length)
                    image_autoscale($('img',autoscale));
            }
        }
    };

    if($.browser.msie && Number($.browser.version) == 8)
    {
        var _append = Element.prototype.appendChild;
        Element.prototype.appendChild = function()
        {
            _append.apply(this,arguments);
            callback({srcElement:this});
        };
    }
    else
        $('body').bind('DOMNodeInserted',callback);

    image_autoscale($('.auto-scale img'));
});

function image_autoscale(obj, params)
{
    if(!obj.length)
        return;
    params = params || {};
    var fadeIn = params['fade'] || 300;
    obj.css({width:'', height:''}).hide();
    obj.parent().addClass('image_loading');
    obj.load(function()
    {
        var elm = $(this);
        var parent = $(elm.parent());
        parent.removeClass('image_loading');
        parent.css({'overflow':'hidden'});
        var parent_width = parent.innerWidth();
        var parent_height = parent.innerHeight();
        var parent_prop = parent_width * 1.0 / parent_height;
        parent.css({position:'relative'});

        var width = elm.width();
        var height = elm.height();
        var prop = width * 1.0 / height;
        var top=0.0, left=0.0;
        if( prop < parent_prop)
        {
            width = parent_width;
            height = width / prop;
            top = (parent_height - height)/2;
        }
        else
        {
            height = parent_height;
            width = height * prop;
            left = (parent_width - width)/2;
        }

        elm.css({position:'absolute', width:width, height:height, top:top, left:left});
        elm.fadeIn(fadeIn)
    });

    obj.load();
};
