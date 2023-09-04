"use strict";

// initiate function on window load
document.addEventListener("DOMContentLoaded", () => {

  const allMusicCDs = []; // list of all music CDs to be displayed

  const MusicCD = { author: null, title: null, year: null, }; // music CD prototype

  const musicCDForm = document.querySelector("#cd-form");
  musicCDForm.addEventListener("submit", submitForm);

  const musicCDAuthor = musicCDForm.querySelector("#form-author");
  const musicCDTitle = musicCDForm.querySelector("#form-title");
  const musicCDYear = musicCDForm.querySelector("#form-year");
  
  function submitForm(e) {
    e.preventDefault();
    
    const formData = getFormData();

    allMusicCDs.push(formData);

    resetForm();
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

});