const handleDelete = () => {
  console.log("delete button clicked", event.target.id.split("--")[1]);
  let parkId = event.target.id.split("--")[1];

  deletePark(parkId)
  .then(() => listNationalParks())
};

const handleMonumentDelete = () => {
  console.log("wow king", event.target.id.split("--")[1]);
  let monumentId = event.target.id.split("--")[1];

  deleteMonument(monumentId)
    .then(() => listMonuments())
}