(function(){dust.register("subject",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/meida/subject/").reference(ctx.get("_id"),ctx,"h").write("\"><img width=\"185\" height=\"127\" src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("name"),ctx,"h").write("\" /><p>").reference(ctx.get("name"),ctx,"h").write("</p><span class=\"link\"><a href=\"#\">קריאה לפעולה</a></span></a></li>");}return body_0;})();(function(){dust.register("subject_small",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/meida/subject/").reference(ctx.get("_id"),ctx,"h").write("\"><div class=\"img\" style='width:185px; height:57px; background-color:#f2f2f2; text-align:center; position:relative'><span style=\"top: 28%; position: relative; color:#b3b3b3; text-decoration:none\">").reference(ctx.get("name"),ctx,"h").write("</span></div></a></li>");}return body_0;})();(function(){dust.register("information_items",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/meida/").reference(ctx.get("_id"),ctx,"h").write("\"><div class=\"image\"><div style=\"width:175px; height:120px;\"><img  src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div><p>").reference(ctx.get("title"),ctx,"h").write("</p></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_1,"block":body_2},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_2(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("cycles",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"something\"><div class=\"image\"><div style=\"width:175px; height:120px;\"><img  src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div><p>").reference(ctx.get("title"),ctx,"h").write("</p></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_1,"block":body_2},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_2(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("create_discussion",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/discussions/").reference(ctx.get("_id"),ctx,"h").write("?subject_id=").reference(ctx.get("subject_id"),ctx,"h").write("&subject_name=").reference(ctx.get("subject_name"),ctx,"h").write("\"><div class=\"image\"><div style=\"width:175px; height:120px;\"><img  src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div><p>").reference(ctx.get("title"),ctx,"h").write("</p></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_1,"block":body_2},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_2(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("actions",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"something\"><div class=\"image\"><div style=\"width:175px; height:120px;\"><img  src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div><p>").reference(ctx.get("title"),ctx,"h").write("</p></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_1,"block":body_2},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_2(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("hot_info_item",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/meida/").reference(ctx.get("_id"),ctx,"h").write("\"><div class='img' style=\"width:250px; height:158px;\"><img src=\"").exists(ctx.getPath(false,["image_field_preview","url"]),ctx,{"else":body_1,"block":body_2},null).write("\" alt=\"").reference(ctx.get("name"),ctx,"h").write("\" /></div><h4>").reference(ctx.get("title"),ctx,"h").write("</h4><div class=\"hot_info_content\"><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_3,"block":body_4},null).write("</p></div><a href=\"javascript:void(0)\">נתונים אפשריים*</a></a></li>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(false,["image_field","url"]),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h");}function body_3(chk,ctx){return chk.reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_4(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("info_item_in_subject_1",body_0);function body_0(chk,ctx){return chk.write("<div value=\"").reference(ctx.get("_id"),ctx,"h").write("\" class=\"action clearfix no_line_when_hover\"><a href=\"/meida/").reference(ctx.get("_id"),ctx,"h").write("\"><p>").reference(ctx.get("title"),ctx,"h").write("</p><div style=\"width:263px; height:155px;\"><img src=\"").exists(ctx.getPath(false,["image_field_preview","url"]),ctx,{"else":body_1,"block":body_2},null).write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_3,"block":body_4},null).write("</p><p>").exists(ctx.get("tags"),ctx,{"block":body_5},null).section(ctx.get("tags"),ctx,{"block":body_6},null).write(" </p><a href=\"javascript:void(0);\" class=\"button add\" style=\"display:none;\">הוסף</a><a href=\"/meida/").reference(ctx.get("_id"),ctx,"h").write("\" class=\"read-more\">קרא עוד (קישור למקור?)</a><a href=\"/facebookShare?link=/meida/").reference(ctx.get("_id"),ctx,"h").write("\"  target=\"_blank\" class=\"button flL\">שתף</a><a href=\"javascript:void(0);\" class=\"button flL like\">1+</a></a></div>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(false,["image_field","url"]),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h");}function body_3(chk,ctx){return chk.reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_4(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}function body_5(chk,ctx){return chk.write("תגיות:");}function body_6(chk,ctx){return chk.write("&nbsp;").reference(ctx.getPath(true,[]),ctx,"h");}return body_0;})();(function(){dust.register("shopping_cart_item_1",body_0);function body_0(chk,ctx){return chk.write("<div info_item_id=\"").reference(ctx.get("_id"),ctx,"h").write("\"><div class=\"frame\"><div style=\"width:240px; height:133px;\"><img src=\"").exists(ctx.getPath(false,["image_field_preview","url"]),ctx,{"else":body_1,"block":body_2},null).write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div></div><p>").exists(ctx.get("text_field_preview"),ctx,{"else":body_3,"block":body_4},null).write("</p><a href=\"javascript:void(0)\" class=\"button remove\">הסר</a><a href=\"").reference(ctx.get("get_link"),ctx,"h").write("\" class=\"read-more\">קרא עוד..</a><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h",["u"]).write("\" target=\"_blank\" class=\"button\">שתף</a></div>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(false,["image_field","url"]),ctx,"h");}function body_2(chk,ctx){return chk.reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h");}function body_3(chk,ctx){return chk.reference(ctx.get("text_field"),ctx,"h",["s"]);}function body_4(chk,ctx){return chk.reference(ctx.get("text_field_preview"),ctx,"h",["s"]);}return body_0;})();(function(){dust.register("pending_action_list_item",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><a href=\"").reference(ctx.get("get_link"),ctx,"h").write("\"><div class=\"frame\"><div style=\"width:125px; height:98px\"><img src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div></div><div class=\"description\"><h4>").reference(ctx.get("title"),ctx,"h").write("</h4><p><p>").reference(ctx.get("text_field_preview"),ctx,"h",["s"]).write("<br>משאבים:<br/>").section(ctx.get("action_resources"),ctx,{"block":body_1},null).write("</p><p>").reference(ctx.get("num_of_going"),ctx,"h").write(" משתתפים&nbsp;( חסרים ").reference(ctx.get("required_participants"),ctx,"h").write(" )&nbsp;").reference(ctx.get("execution_date"),ctx,"h",["ago"]).write("</p><p>תאריך הצעה(כמה זמן ממתין לאישור):<br>").reference(ctx.get("creation_date"),ctx,"h",["ago"]).write("</p></div><div class=\"action\"><a href=\"/facebookShare?link=").reference(ctx.get("get_link_uri"),ctx,"h").write("\" class=\"button\">שתף</a><a href=\"#\" class=\"button\">הגב</a></div></a></li>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(true,["resource","name"]),ctx,"h").write(" - ").reference(ctx.getPath(true,["amount"]),ctx,"h").write("&nbsp;");}return body_0;})();(function(){dust.register("action_list_item",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><a href=\"").reference(ctx.get("get_link"),ctx,"h").write("\"><div class=\"frame\"><div style=\"width:125px; height:98px\"><img src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div></div><div class=\"description\"><h4> ").reference(ctx.get("title"),ctx,"h").write(" &nbsp;").reference(ctx.get("execution_date"),ctx,"h",["time"]).write("</h4><p>").reference(ctx.get("type"),ctx,"h").write("+").reference(ctx.get("tokens"),ctx,"h").write("</p><p>").reference(ctx.get("text_field_preview"),ctx,"h",["s"]).write("<br>משאבים:<br/>").section(ctx.get("action_resources"),ctx,{"block":body_1},null).write("</p><p><br>").reference(ctx.get("num_of_going"),ctx,"h").write(" משתתפים( חסרים ").reference(ctx.get("required_participants"),ctx,"h").write(" )</p></div></a><div class=\"action\"><a href=\"/facebookShare?link=").reference(ctx.get("get_link_uri"),ctx,"h").write("\" class=\"button\">שתף</a><a href=\"javascript:void(0)\" class=\"button join_button\" item_id=\"").reference(ctx.get("_id"),ctx,"h").write("\">הצטרף</a></div></li>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(true,["resource","name"]),ctx,"h").write(" - ").reference(ctx.getPath(true,["amount"]),ctx,"h");}return body_0;})();(function(){dust.register("discussion_list_item",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><a href=\"").reference(ctx.get("get_link"),ctx,"h").write("\"><div class=\"frame\"><div style=\"width:125px; height:98px;\"></div><img src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div></div><div class=\"description\"><h4>").reference(ctx.get("title"),ctx,"h").write("</h4><p>").reference(ctx.get("text_field_preview"),ctx,"h",["s"]).write("</p><p>דירוג נוכחי:").reference(ctx.get("grade"),ctx,"h").write("</p><p>תאריך פתיחה:").reference(ctx.get("creation_date"),ctx,"h",["time"]).write("</p><p>מספר משתתפים:<br> ").reference(ctx.get("followers_count"),ctx,"h").write("</p></div></a><div class=\"action\"><a href=\"/facebookShare?link=").reference(ctx.get("get_link_uri"),ctx,"h").write("\" class=\"button\">שתף</a><a href=\"javascript:void(0)\" class=\"button join_button\" item_id='").reference(ctx.get("_id"),ctx,"h").write("'>הצטרף</a></div></li>");}return body_0;})();(function(){dust.register("cycle_list_item",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><a href=\"").reference(ctx.get("get_link"),ctx,"h").write("\"><div class=\"frame\"><div style=\"width:125px; height:98px;\"><img src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div></div><div class=\"description\"><h4>").reference(ctx.get("title"),ctx,"h").write("</h4><p>מספר עוקבים:").reference(ctx.get("followers_count"),ctx,"h").write("</p><p>מספר תגובות:").reference(ctx.get("num_of_comments"),ctx,"h").write("</p><p>מספר פעולות עתידיות:{}</p><p>(פעולות שהצליחו בעבר):<br>{}</p></div><div class=\"action\"> <a href=\"/facebookShare?link=").reference(ctx.get("get_link_uri"),ctx,"h").write("\" class=\"button\">שתף</a><a href=\"javascript:void(0)\" class=\"button join_button\" item_id=\"").reference(ctx.get("_id"),ctx,"h").write("\">הצטרף</a> </div><div class=\"action-bottom clearfix\"><p class=\"meta-data\">הפעולה הקרובה: <a href=\"#\">שם הפעולה</a> <span class=\"divider\">|</span> <a href=\"#\">תאריך ושעה</a> <span class=\"divider\">|</span> <a href=\"#\">מספר משתתפים</a><a href=\"#\">").reference(ctx.getPath(false,["upcoming_action","title"]),ctx,"h").write("</a><span class=\"divider\">|</span><a href=\"#\">").reference(ctx.getPath(false,["upcoming_action","execution_date"]),ctx,"h",["time"]).write("</a><span class=\"divider\">|</span><a href=\"#\">").reference(ctx.getPath(false,["upcoming_action","num_of_going"]),ctx,"h").write("</a></p><a href=\"javascript:void(0)\" class=\"button join_action_button\" item_id=\"").reference(ctx.getPath(false,["upcoming_action","_id"]),ctx,"h").write("\">הצטרף</a></div></a></li>");}return body_0;})();(function(){dust.register("discussion_full_view",body_0);function body_0(chk,ctx){return chk.write("<div class=\"discussions clearfix\"><div class=\"frame1 flR\"> <img src=\"resources/images/assets/image19.jpg\" alt=\"image19\"/> </div><div class=\"description clearfix\"><h5>").reference(ctx.get("title"),ctx,"h").write("</h5><h5>").reference(ctx.get("vision_text"),ctx,"h").write("</h5><p>שמו אינו מדינות דת, זקוק קבלו מועמדים מתן בה.</p><div class=\"tags clearfix\"><p class=\"clearfix\">").section(ctx.get("tags"),ctx,{"block":body_1},null).write("<a href=\"#\" class=\"add\">הוסף תגיות</a></p><p class=\"highlight clearfix\"><span>הצעה לשינוי</span><span>היסטוריה*</span></p></div><div class=\"buttons\"><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h").write("\" target=\"_blank\" class=\"button flL\">שתף</a><a href=\"#\" class=\"button flL\">דירוג המסמך").reference(ctx.get("grade"),ctx,"h").write("</a><a href=\"#\" class=\"button flL\">הגב</a></div></div></div>");}function body_1(chk,ctx){return chk.write("<a href=\"#\">").reference(ctx.getPath(true,[]),ctx,"h").write("  &nbsp; </a>");}return body_0;})();(function(){dust.register("action_timeline",body_0);function body_0(chk,ctx){return chk.write("<div class=\"action_timeline\" style=\"left:").reference(ctx.get("get_left"),ctx,"h").write("%\"><div class=\"action_circle\"></div><div class=\"action_date\" >").reference(ctx.get("execution_date"),ctx,"h",["date"]).write("</div><div class=\"box description\" style=\"display:none; \"><div class=\"box-inner clearfix\"><p>").reference(ctx.get("title"),ctx,"h").write(" | ").reference(ctx.get("execution_date"),ctx,"h",["date"]).write("<br/>").reference(ctx.get("num_of_going"),ctx,"h").write(" | ").reference(ctx.getPath(false,["users","length"]),ctx,"h").write("</p><a href=\"javascript:void(0)\" class=\"button\">הצטרף</a> <span class=\"arrow2\"></span> </div></div></div>");}return body_0;})();(function(){dust.register("action_full_view",body_0);function body_0(chk,ctx){return chk.write("<div class=\"post clearfix\"><div class=\"timeline clearfix\"><h3>Timeline (+ קישור לצפייה בכל פעולות המערכת, לאו דווקא במעגל התנופה הנוכחי)</h3><!-- <a href=\"#\" class=\"button\">עבור לתצוגת מפה</a> --><div class=\"timeline-detail\"> <img src=\"/resources/images/assets/image29.jpg\" alt=\"image29\" class=\"timeline\" /> </div></div><div class=\"topics-1\"><h2>").reference(ctx.getPath(true,["cycle_id","title"]),ctx,"h").write("</h2><p>").reference(ctx.getPath(true,["cycle_id","text_field"]),ctx,"h",["s"]).write("</p><br class=\"clear\" /><div class=\"frame1 flR\" ><div style=\"width: 254px;height:199px;\"><img  id=\"actionImg\" src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" /></div></div><div class=\"details clearfix\"><p>").reference(ctx.getPath(true,["creation_date"]),ctx,"h",["time"]).write("</p><p>").reference(ctx.getPath(true,["type"]),ctx,"h").write("</p><p>").reference(ctx.getPath(true,["description"]),ctx,"h").write("</p><p>מספר משתתפים:").reference(ctx.getPath(true,["required_participants"]),ctx,"h").write(" כמות רצויה:").reference(ctx.getPath(true,["num_of_going"]),ctx,"h").write("</p><p>").section(ctx.get("tags"),ctx,{"block":body_1},null).write("</p><div class=\"members\"><!-- <p>חברים משתתפים (").reference(ctx.getPath(true,["required_participants"]),ctx,"h").write(") + מדורגים הכי גבוה \\ משפיעים \\ מעוטרים</p> use latear --><p>משתתפים:</p><ul class=\"clearfix\">").section(ctx.get("going_users"),ctx,{"block":body_3},null).write("</ul></div></div><a href=\"#\" class=\"button\">שתף</a><br class=\"clear\" /><h5>תיאור הפעולה</h5><a href=\"#\" class=\"button\">שתף</a><p>").reference(ctx.getPath(true,["text_field"]),ctx,"h",["s"]).write("</p><br class=\"clear\" /><h5>משאבים נדרשים</h5><a href=\"#\" class=\"button\">שתף</a><p>").section(ctx.get("action_resources"),ctx,{"block":body_4},null).write("</p><br class=\"clear\" /><a href=\"#\" class=\"button suggest-action\">הצע פעולה חדשה</a></div></div>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(true,[]),ctx,"h").helper("sep",ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write(", ");}function body_3(chk,ctx){return chk.write("<!--<li><img src=\"http://<%=avatar%>\" alt=\"").reference(ctx.getPath(true,["username"]),ctx,"h").write("\" />").reference(ctx.getPath(true,["username"]),ctx,"h").write("</li>--><li><div><img height=\"36px\" width=\"42px\" src=\"http://graph.facebook.com/").reference(ctx.getPath(true,["facebook_id"]),ctx,"h").write("/picture/?type=small\" alt=\"").reference(ctx.getPath(true,["username"]),ctx,"h").write("\" /></div>").reference(ctx.getPath(true,["username"]),ctx,"h").write("</li>");}function body_4(chk,ctx){return chk.reference(ctx.getPath(true,["resource","name"]),ctx,"h").write(" ").reference(ctx.getPath(true,["amount"]),ctx,"h").helper("sep",ctx,{"block":body_5},null);}function body_5(chk,ctx){return chk.write(", ");}return body_0;})();(function(){dust.register("action_map",body_0);function body_0(chk,ctx){return chk;}return body_0;})();(function(){dust.register("cycle_main",body_0);function body_0(chk,ctx){return chk.write("<h2>").reference(ctx.get("title"),ctx,"h").write("</h2><div class=\"discussions clearfix\"><div class=\"frame1 flR\"> <img src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/></div><div class=\"description clearfix\"><p>       ").reference(ctx.getPath(false,["discussion","vision_text"]),ctx,"h").write(" </p><a href=\"/facebookShare?link=").reference(ctx.get("get_link_uri"),ctx,"h").write("\" class=\"button flL\">שתף</a> </div><div class=\"box information\" id=\"cycleInformationItem\"></div><br class=\"clear\" /><img src=\"/resources/images/assets/image21.jpg\" alt=\"image21\" id=\"pupularPostsLink\" style=\"cursor: pointer\" /><ul class=\"list1\" id=\"cyclePopularPosts\"></ul><a href=\"/discussions/").reference(ctx.getPath(false,["discussion","_id"]),ctx,"h").write("\" class=\"button flL\">מעבר לדיון המתקיים</a></div><div class=\"follow clearfix\"><p>מספר העוקבים אaחרי מעגל תנופה זה:<strong>").reference(ctx.get("followers_count"),ctx,"h").write("</strong></p>").exists(ctx.get("is_follower"),ctx,{"else":body_1,"block":body_2},null).write("</div>");}function body_1(chk,ctx){return chk.write("<a href=\"javascript:void(0)\" id=\"followCycleButton\"  class=\"button\">עקוב אחרי מעגל התנופה</a>");}function body_2(chk,ctx){return chk;}return body_0;})();(function(){dust.register("cycle_user",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><div class=\"frame1\"><div class=\"slide\">  <img width=\"82\" src=\"").reference(ctx.getPath(false,["user_id","avatar","url"]),ctx,"h").write("\" alt=\"").reference(ctx.getPath(false,["user_id","first_name"]),ctx,"h").write(" ").reference(ctx.getPath(false,["user_id","last_name"]),ctx,"h").write("\"/></div><span class=\"controls\"><a href=\"#\"></a><a href=\"#\"></a><a href=\"#\"></a></span> </div><div class=\"description\"><p>שם משתמש:<br>").reference(ctx.getPath(false,["user_id","first_name"]),ctx,"h").write(" ").reference(ctx.getPath(false,["user_id","last_name"]),ctx,"h").write("</p><p>מתי הצטרף: <br>").reference(ctx.get("join_date"),ctx,"h",["date"]).write("</p></div></li>");}return body_0;})();(function(){dust.register("cycle_update",body_0);function body_0(chk,ctx){return chk.write("<a href=\"#\" class=\"button suggest new_action_btn\">הצע פעולה חדשה</a><p class=\"meta-data\">עדכונים, שיתופים, תוספות, הודעות *****</p><div class=\"frame1\"> <img width=\"296\" src=\"").reference(ctx.getPath(false,["image_field","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\"/> </div><h4>").reference(ctx.get("title"),ctx,"h").write("</h4><p> ").reference(ctx.get("text_field"),ctx,"h").write("</p><a href=\"#\" class=\"read-more\">קרא עוד...</a>");}return body_0;})();(function(){dust.register("cycle_pending_action",body_0);function body_0(chk,ctx){return chk.write("<li><h4>כותרת פעולה:<br> ").reference(ctx.get("title"),ctx,"h").write("</h4><p>תקציר הפעולה:<br> ").reference(ctx.get("text_field_preview"),ctx,"h").write("</p><span class=\"meta-data\">מידע רלוונטי (תאריך, משתתפים):<br>").reference(ctx.get("execution_date"),ctx,"h",["date"]).write(",  ").reference(ctx.get("num_of_going"),ctx,"h").write("</span></li>");}return body_0;})();(function(){dust.register("cycle_popular_post",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><div class=\"description clearfix\"><div class=\"frame\"><img alt=\"image23\" src=\"/resources/images/assets/image23.jpg\"/> </div><h4>המשתמש שפתח את הדיון:<br>").reference(ctx.getPath(false,["creator_id","first_name"]),ctx,"h").write("  ").reference(ctx.getPath(false,["creator_id","last_name"]),ctx,"h").write("</h4><p class=\"meta-data\">תארaיך | שעה:<br>").reference(ctx.get("creation_date"),ctx,"h",["date"]).write(" |  ").reference(ctx.get("creation_date"),ctx,"h",["time"]).write("</p><p>").reference(ctx.get("text"),ctx,"h").write("</p></div><div class=\"action\"><a class=\"button\" href=\"#\">הגב</a><a class=\"button\" href=\"/facebookShare?link=").reference(ctx.get("get_link_uri"),ctx,"h").write("\">שתף</a><a class=\"button\" href=\"#\">Like</a> </div></li>");}return body_0;})();(function(){dust.register("cycle_information_item",body_0);function body_0(chk,ctx){return chk.write("<img src=\"").exists(ctx.getPath(false,["image_field_preview","url"]),ctx,{"else":body_1,"block":body_2},null).write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" width=\"168\" height=\"133\" /><a href=\"/meida/").reference(ctx.get("_id"),ctx,"h").write("\" class=\"button\">קישור לעגלת המידע</a>");}function body_1(chk,ctx){return chk.write("/resources/images/assets/image20.jpg");}function body_2(chk,ctx){return chk.reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h");}return body_0;})();(function(){dust.register("information_item_in_discussion",body_0);function body_0(chk,ctx){return chk.write("<div class=\"two-column-layout2 clearfix\"><div class=\"frame\"><div style=\"width:464px; height:184px;\"><img src=\"").exists(ctx.get("image_field_preview"),ctx,{"block":body_1},null).write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" title=\"").reference(ctx.get("title"),ctx,"h").write("\"></div></div><div class=\"description clerfix\"><div id=\"information_item_content\">").reference(ctx.get("text_field_preview"),ctx,"h",["s"]).write("</div><a href=\"").reference(ctx.get("get_link"),ctx,"h").write("\" class=\"read-more\">קרא עוד..</a></div></div>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h");}return body_0;})();(function(){dust.register("myCycle_list_item",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/cycles/").reference(ctx.getPath(true,["_id"]),ctx,"h").write("\"><div class=\"frame1\" ><div class=\"myuru-li-img\"><img id=\"cycleImg\" src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div></div><p>").reference(ctx.get("title"),ctx,"h").write("</p><p>").section(ctx.get("subject"),ctx,{"block":body_1},null).write("</p><p>").section(ctx.get("users"),ctx,{"block":body_3},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(true,["name"]),ctx,"h").helper("sep",ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write(", ");}function body_3(chk,ctx){return chk.reference(ctx.getPath(true,["join_date"]),ctx,"h",["time"]);}return body_0;})();(function(){dust.register("myDiscussion_list_item",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"discussions/").reference(ctx.getPath(true,["_id"]),ctx,"h").write("\"><div class=\"frame1\" ><div class=\"myuru-li-img\"><img id=\"cycleImg\" src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div></div><p>").reference(ctx.get("title"),ctx,"h").write("</p><p>").section(ctx.get("subject"),ctx,{"block":body_1},null).write("</p><p>").section(ctx.get("users"),ctx,{"block":body_3},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(true,["name"]),ctx,"h").helper("sep",ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write(", ");}function body_3(chk,ctx){return chk.reference(ctx.getPath(true,["join_date"]),ctx,"h",["time"]);}return body_0;})();(function(){dust.register("myAction_list_item",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"/Actions/").reference(ctx.getPath(true,["_id"]),ctx,"h").write("\"><div class=\"frame1\" ><div class=\"myuru-li-img\"><img id=\"cycleImg\" src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div></div><p>").reference(ctx.get("title"),ctx,"h").write("</p><p>").section(ctx.get("subject"),ctx,{"block":body_1},null).write("</p><p>").section(ctx.get("users"),ctx,{"block":body_3},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(true,["name"]),ctx,"h").helper("sep",ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write(", ");}function body_3(chk,ctx){return chk.reference(ctx.getPath(true,["join_date"]),ctx,"h",["time"]);}return body_0;})();(function(){dust.register("myKilkulListItem",body_0);function body_0(chk,ctx){return chk.write("<li><a href=\"discussions/").reference(ctx.getPath(true,["_id"]),ctx,"h").write("\"><div class=\"frame1\" ><div class=\"myuru-li-img\"><img id=\"cycleImg\" src=\"").reference(ctx.getPath(false,["image_field_preview","url"]),ctx,"h").write("\" alt=\"").reference(ctx.get("title"),ctx,"h").write("\" /></div></div><p>").reference(ctx.get("title"),ctx,"h").write("</p><p>").section(ctx.get("subject"),ctx,{"block":body_1},null).write("</p><p>").section(ctx.get("users"),ctx,{"block":body_3},null).write("</p></a></li>");}function body_1(chk,ctx){return chk.reference(ctx.getPath(true,["name"]),ctx,"h").helper("sep",ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write(", ");}function body_3(chk,ctx){return chk.reference(ctx.getPath(true,["join_date"]),ctx,"h",["time"]);}return body_0;})();(function(){dust.register("post",body_0);function body_0(chk,ctx){return chk.write("<li class=\"clearfix\"><div class=\"description clearfix\"><div class=\"image\"><div class=\"frame\"><div style=\"width:59px; height:62px;\"><img alt=\"").reference(ctx.get("title"),ctx,"h").write("\" src=\"").reference(ctx.getPath(false,["creator_id","avatar_url"]),ctx,"h").write("\"/></div><div class=\"controls\"><a href=\"javascript:void(0)\"></a><a href=\"javascript:void(0)\"></a></div></div><span>").reference(ctx.getPath(false,["creator_id","username"]),ctx,"h").write(" ").exists(ctx.get("creation_date"),ctx,{"block":body_1},null).write("</span></div><p class='post_text'>").reference(ctx.get("text"),ctx,"h").write("</p></div><div class=\"action\" data-id=\"").reference(ctx.get("_id"),ctx,"h").write("\"><a class=\"button quote_button\" href=\"javascript:void(0)\">צטט</a><a class=\"button\" href=\"/facebookShare?link=/discussions/").reference(ctx.get("discussion_id"),ctx,"h").write("\" target=\"_blank\">שתף</a><!---<a class=\"button like_button\" href=\"javascript:void(0)\">Like</a--><a class=\"button vote_for\" href=\"javascript:void(0)\"><span dir=\"ltr\">").reference(ctx.get("votes_for"),ctx,"h").write("</span>&nbsp;בעד</a><a class=\"button vote_against\" href=\"javascript:void(0)\"><span dir=\"ltr\">").reference(ctx.get("votes_against"),ctx,"h").write("</span>&nbsp;נגד</a></div></li>");}function body_1(chk,ctx){return chk.reference(ctx.get("creation_date"),ctx,"h",["time"]);}return body_0;})();(function(){dust.register("discussion_full_view",body_0);function body_0(chk,ctx){return chk.write("<div class=\"discussions clearfix\"><div class=\"frame1 flR\"> <img src=\"resources/images/assets/image19.jpg\" alt=\"image19\"/> </div><div class=\"description clearfix\"><h5>").reference(ctx.get("title"),ctx,"h").write("</h5><h5>").reference(ctx.get("vision_text"),ctx,"h").write("</h5><p>שמו אינו מדינות דת, זקוק קבלו מועמדים מתן בה.</p><div class=\"tags clearfix\"><p class=\"clearfix\">").section(ctx.get("tags"),ctx,{"block":body_1},null).write("<a href=\"#\" class=\"add\">הוסף תגיות</a></p><p class=\"highlight clearfix\"><span>הצעה לשינוי</span><span>היסטוריה*</span></p></div><div class=\"buttons\"><a href=\"/facebookShare?link=").reference(ctx.get("get_link"),ctx,"h").write("\" target=\"_blank\" class=\"button flL\">שתף</a><a href=\"#\" class=\"button flL\">דירוג המסמך").reference(ctx.get("grade"),ctx,"h").write("</a><a href=\"#\" class=\"button flL\">הגב</a></div></div></div>");}function body_1(chk,ctx){return chk.write("<a href=\"#\">").reference(ctx.getPath(true,[]),ctx,"h").write("  &nbsp; </a>");}return body_0;})();