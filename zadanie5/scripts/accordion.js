function accordionItemClick(sender) {
    var accordionItemClicked = sender.parentElement;
    var item_content = accordionItemClicked.getElementsByTagName("div")[0];

    disableAccordionItems(accordionItemClicked.parentElement)

    item_content.classList.add("enabled")
}

function disableAccordionItems(accordion) {
    var accordionItems = accordion.getElementsByClassName("accordion-item");
    for (let i = 0; i < accordionItems.length; i++) {
        accordionItems[i].getElementsByTagName("div")[0].classList.remove("enabled");
    }
}