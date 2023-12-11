const CreateEle = (element) => {
  return document.createElement(element);
};
const setingAttribute = (element, type, Name) => {
  return (element.setAttribute(type, Name));
};
const AppendEle = (AppendElement, With) => {
  return AppendElement.appendChild(With);
};

const body = document.querySelector("body");

// creating Elements

const MainBody = CreateEle("div");
const mainCantainer = CreateEle("div");
const form = CreateEle("form");
const input = CreateEle("input");
const submit = CreateEle("input");
input.type = "text";
submit.type = "submit";

// Seting Attributes

setingAttribute(MainBody, "class", "Main-Body");
setingAttribute(mainCantainer, "class", "Main-container");
setingAttribute(form, "class", "Form");
setingAttribute(input, "class", "Input");
setingAttribute(submit, "class", "Submit");

// Appends

AppendEle(body, MainBody);
AppendEle(body, mainCantainer);
AppendEle(MainBody, form);
AppendEle(form, input);
AppendEle(form, submit);

form.addEventListener("submit", (ele) => {
  ele.preventDefault();
  //   input value
  const valOfInput = input.value;

  //   creating extra elements for Listing

  const newElementTodo = CreateEle("div");
  const textInTodo = CreateEle("h1");
  const deleteButton = CreateEle("button");
  const saveButton = CreateEle("button");

  textInTodo.textContent = valOfInput;
  deleteButton.textContent = "Delete";
  saveButton.textContent = "Save";

  // setting attributes to extra elements

  setingAttribute(newElementTodo, "class", "newElementTodo");
  setingAttribute(textInTodo, "class", "textInTodo");
  setingAttribute(deleteButton, "class", "deleteButton");
  setingAttribute(saveButton, "class", "saveButton");

  // appends extra elements
  AppendEle(mainCantainer, newElementTodo);
  AppendEle(newElementTodo, textInTodo);
  AppendEle(newElementTodo, deleteButton);
  AppendEle(newElementTodo, saveButton);
  // save button functionality
  saveButton.addEventListener("click", () => {
    if (saveButton.textContent === "Save") {
      deleteButton.remove();
      saveButton.textContent = "unSave";
    } else {
      newElementTodo.insertBefore(deleteButton, saveButton);
      saveButton.textContent = "Save";
    }
  });
  //   delete button functionality
  deleteButton.addEventListener("click", () => {
    newElementTodo.remove();
  });
});
