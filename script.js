"use strict";

// initiate function on window load
document.addEventListener("DOMContentLoaded", () => {

  const allMusicCDs = []; // list of all music CDs to be displayed

  const MusicCD = { author: null, title: null, year: null, }; // music CD object prototype

  const musicCDList = document.querySelector("#cd-list"); // parent element for the music CDs

  const musicCDTemplate = document.querySelector("#cd-template"); // template fragment for the music CD

  const musicCDForm = document.querySelector("#cd-form");
  musicCDForm.addEventListener("submit", submitForm);

  const musicCDAuthor = musicCDForm.querySelector("#form-author");
  const musicCDTitle = musicCDForm.querySelector("#form-title");
  const musicCDYear = musicCDForm.querySelector("#form-year");
  
  // on form submit
  function submitForm(e) {
    e.preventDefault();
    
    const formData = getFormData();

    allMusicCDs.push(formData);

    resetForm();

    displayData(allMusicCDs);
  }

  // retrieve data from the form
  function getFormData() {
    const musicCD = Object.create(MusicCD);

    const MusicCDAuthorValue = musicCDAuthor.value.trim();
    musicCD.author = MusicCDAuthorValue;

    const MusicCDTitleValue = musicCDTitle.value.trim();
    musicCD.title = MusicCDTitleValue;

    const MusicCDYearValue = Number(musicCDYear.value.trim());
    musicCD.year = MusicCDYearValue;

    console.log(musicCD);
    return musicCD;
  }

  // reset all input values in the form for the user
  function resetForm() {
    musicCDAuthor.value = "";
    musicCDTitle.value = "";
    musicCDYear.value = "";
  }

  // display the music CD list
  function displayData(musicCDs) {
    // clear the list
    musicCDList.innerHTML = "";

    // loop through allMusicCDs and "render" the data
    musicCDs.forEach((musicCD) => {
      const musicCDClone = document.importNode(musicCDTemplate.content, true);

      const musicCDCloneAuthor = musicCDClone.querySelector("[data-cd-author]");
      musicCDCloneAuthor.textContent = musicCD.author;

      const musicCDCloneTitle = musicCDClone.querySelector("[data-cd-title]");
      musicCDCloneTitle.textContent = musicCD.title;

      const musicCDCloneYear = musicCDClone.querySelector("[data-cd-year]");
      musicCDCloneYear.textContent = musicCD.year;

      musicCDList.appendChild(musicCDClone);
    })
  };

});