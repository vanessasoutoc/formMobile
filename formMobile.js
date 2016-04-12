(function($){
    // inicia o plugin
    $.fn.formMobile = function(json, id){
        console.log(json);
        console.log(id);
        var model = {};
        $.each(json, function(key, value){

            model[key] = "";

            var newValue = JSON.stringify(value).replace('x-schema-form', 'xSchema');
            value = JSON.parse(newValue);
            console.log(value);
            if(value.typeForm === "DATA"){
                console.log(key);
                var type = "date";
                $("<br /><label>"+value.title+": &emsp;</label><input class='form-control' type='"+type+"' name='' id='"+key+"' /><br />").appendTo('#'+id);
                $("input").blur(function(){
                    model[key] = $('#'+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            };
            if(value.typeForm === "CALENDARIO"){
                console.log(key);
                var type = "date";
                $("<br /><label>"+value.title+": &emsp;</label><input class='form-control' type='"+type+"' name='' id='"+key+"' /><br />").appendTo('#'+id);
                $("input").blur(function(){
                    model[key] = $('#'+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            };
            if(value.typeForm === "RADIO"){
                console.log(key);
                var type = "radio";
                $("<br /><label>"+value.title+": &emsp;</label>").appendTo('#'+id);
                $("<div class='"+type+"' id='"+key+"'></div>").appendTo('#'+id);
                $.each(value.enum,function(option){
                    $("<label><input type='radio' name='"+key+"' value='"+option+"'>"+option+"</label><br>").appendTo('#'+id+' div#'+key);
                });
                $("input").blur(function(){
                    model[key] = $("#"+key+".radio input[type='radio']:checked").val();
                    console.log('.blur');
                    console.log(model);
                });

            };
            if(value.typeForm === "CHECK-BOX"){
                console.log(key);
                model[key] = [];
                var type = "checkbox";
                $("<br /><label>"+value.title+": &emsp;</label>").appendTo('#'+id);
                $("<div class='"+type+"' id='"+key+"'></div>").appendTo('#'+id);
                $.each(value.items.enum,function(option){
                    $("<label><input type='checkbox' id='"+key+"' name='"+key+"[]' value='"+option+"'>"+option+"</label><br>").appendTo('#'+id+' div#'+key);
                });
                $("input").blur(function(){
                    var cboxes = document.getElementsByName(key+'[]');
                    var len = cboxes.length;
                    for (var i=0; i<len; i++) {
                        if(cboxes[i].checked){
                            if(model[key].indexOf(cboxes[i].value) === -1){
                                model[key].push(cboxes[i].value);
                            }
                        }
                        else{
                            if((ax = model[key].indexOf(cboxes[i].value)) !== -1){
                                model[key].splice(ax, 1);
                            }
                        }
                    }
                });

            };
            if(value.typeForm === "SELECIONAR"){
                console.log(key);
                var type = "select";
                $("<br /><label>"+value.title+": &emsp;</label>").appendTo('#'+id);
                $("<select name='"+key+"' class='form-control' id='"+key+"'><option value=''>Selecione aqui</option></select>").appendTo('#'+id);
                $.each(value.enum,function(option){
                    $("<option value='"+option+"'>"+option+"</option>").appendTo('#'+id+' select#'+key);
                });
                $("input").blur(function(){
                    model[key] = $("select#"+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            };
            if(value.typeForm === "EMAIL"){
                console.log(key);
                var type = "email";
                $("<br /><label>"+value.title+": &emsp;</label><input class='form-control' type='"+type+"' name='"+key+"' id='"+key+"' /><br />").appendTo('#'+id);
                $("input").blur(function(){
                    model[key] = $("#"+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            }
            if(value.typeForm === "TEXTO"){
                console.log(key);
                var type = "phone";
                $("<br /><label>"+value.title+": &emsp;</label><input class='form-control' type='"+type+"' name='"+key+"' id='"+key+"' /><br />").appendTo('#'+id);
                $("input").blur(function(){
                    model[key] = $("#"+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            };
            if(value.typeForm === "PHONE"){
                console.log(key);
                var type = "phone";
                $("<br /><label>"+value.title+": &emsp;</label><input class='form-control' type='"+type+"' name='"+key+"' id='"+key+"' /><br />").appendTo('#'+id);
                $('#'+key).mask('(00) 00000-0000');
                $("input").blur(function(){
                    model[key] = $("#"+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            };
            if(value.typeForm === "NUMERO"){
                console.log(key);
                var type = "number";
                $("<br /><label>"+value.title+": &emsp;</label><input class='form-control' type='"+type+"' name='"+key+"' id='"+key+"' /><br />").appendTo('#'+id);
                $("input").blur(function(){
                    model[key] = $("#"+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            };
            if(value.typeForm === "TEXTO-LONGO"){
                console.log(key);
                var type = "text";
                $("<br /><label>"+value.title+": &emsp;</label><textarea class='form-control' rows='4' name='"+key+"' id='"+key+"'></textarea><br />").appendTo('#'+id);
                $("input").blur(function(){
                    model[key] = $("#"+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            };
            if(value.typeForm === "SECRETO"){
                var type = "password";
                $("<br /><label>"+value.title+": &emsp;</label><input class='form-control' type='"+type+"' name='"+key+"' id='"+key+"' /><br />").appendTo('#'+id);
                $("input").blur(function(){
                    model[key] = $("#"+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            };
            if(value.typeForm === "ANEXO"){
                var type = 'file';
                $("<br /><label>"+value.title+": &emsp;</label><input type='"+type+"' id='"+key+"'>").appendTo('#'+id);
                $("input").blur(function(){
                    model[key] = $("#"+key).val();
                    console.log('.blur');
                    console.log(model);
                });
            }

        });
        console.log(model);
        return model;
    }
})(jQuery);