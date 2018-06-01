function renderTrueFolderStrruct(elem, data, str='menu-') {
    var i = 0;
    for (var key in data) {
        i++;
        var item = data[key];
        if (item.children) {
            //In case we have two different <ol>, we could insert in two different places
            var container = $("<ol></ol>");
            var newCont = $("<ol></ol>");
            var li = $("<li></li>");

            li.append(
                "<label for=" + str + i + "> " + item.text + "" +

                "</label>" +
                "<input type='checkbox' id=" + str + i + ">"
            );
            li.append(newCont);
            container.append(li);

            elem.append(container);
            renderTrueFolderStrruct(newCont, item.children, str + i + '-')
        } else {
            var appendedEl = $(
                "<li class='file'>" +
                "<a> " + item.text + "</a>" +
                "</li>")
            elem.append(appendedEl);
        }
    }
}

window.tsRenderFolderStruct =  renderTrueFolderStrruct;