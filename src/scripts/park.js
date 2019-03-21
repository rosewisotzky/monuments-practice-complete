const buildParkHtml = parkObject => {

  const parkArticle = buildElement("article");
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  let deleteParkButton = buildElement("button", `delete-park--${parkObject.id}`, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete)
  return parkArticle;
};

const buildMonumentHtml = monumentObject => {
  const monumentArticle = buildElement("article");
  monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.name));
  monumentArticle.appendChild(buildElement("h3", undefined, monumentObject.state));
  let monumentDeleteButton = buildElement("button", `delete-monument--${monumentObject.id}`, "Delete monument");
  monumentArticle.appendChild(monumentDeleteButton)
  monumentDeleteButton.addEventListener("click", handleMonumentDelete)
  return monumentArticle;
}

