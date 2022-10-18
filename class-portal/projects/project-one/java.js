// Base javascript code from Youtube tutorial : https://www.youtube.com/watch?v=m9OSBJaQTlM&list=RDCMUCjGQyJCSU_VVMTu5nigonqg&start_radio=1&t=168s
// Changes by Yuliza Saucedo with references to https://www.w3schools.com/
let nav = 0; //keeping track of week 
let clicked = null; 
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []; //events in local storage

const fullweek = document.getElementById('week'); 
const newEventModal = document.getElementById('newEventModal'); 
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop'); 
const eventTitleInput = document.getElementById('eventTitleInput');
const eventTitleInputTwo = document.getElementById('eventTitleInputTwo');
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 


//function that opens event input when day is clicked
function openModal(date){
    clicked = date;

    const eventForDay = events.find(e => e.date === clicked);

    if(eventForDay){
        document.getElementById('eventText').innerText = eventForDay.title;
        document.getElementById('eventTextTwo').innerText = eventForDay.title;

        deleteEventModal.style.display = 'block'; 
        
    }else {
        newEventModal.style.display = 'block'; 
    }
    backDrop.style.display = 'block';
}
//main planner load function
function load(){
    const dt = new Date(); 
    const day = dt.getDate(); 
    const month = dt.getMonth(); 
    const year = dt.getFullYear(); 

    const firstDayofWeek = new Date(year, month, day);
    const daysInMonth = new Date(year, month+1, 0).getDate(); 
    const daysInWeek = 7;  
    
    const dateString = firstDayofWeek.toLocaleDateString('en-us', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric',
    });
    // console.log(dateString); 

    const paddingDays = days.indexOf(dateString.split(', ')[0]); 
    // console.log(paddingDays); 

    //
    document.getElementById('week-display').innerText = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`; //header display
    fullweek.innerHTML = '';  //allows week to be populated on same page 
    // button event listeners 
    // make the weekly calander  
    for(let i = 1; i <= daysInWeek; i++){
        const daySquare = document.createElement('div'); 
        daySquare.classList.add('day');

        const dayString = `${month + 1}/${(day - (paddingDays + 1)) + i}/${year}`; 

        if(i >= paddingDays){
           daySquare.innerText = ((day - (paddingDays + 1)) + i); //display this week, same month

           const eventForDay = events.find(e => e.date === dayString);

        //    if (i - paddingDays === day){
        //     daySquare.id = `currentDay`; 

        //    }

           if (eventForDay){
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.innerText = eventForDay.title; 
            daySquare.appendChild(eventDiv); 
            const eventDivTwo = document.createElement('div');
            eventDivTwo.classList.add('event');
            eventDivTwo.innerText = eventForDay.title; 
            daySquare.appendChild(eventDivTwo); 
           }

            daySquare.addEventListener('click', () => openModal(dayString)); 
        }else{
            daySquare.innerText = (daysInMonth + i) - paddingDays; //display this week, two diff months 
            // daySquare.classList.add('padding');
        }
        fullweek.appendChild(daySquare); 
        
    }
   
}

function closeModal(){
    eventTitleInput.classList.remove('error');
    eventTitleInputTwo.classList.remove('error');
    newEventModal.style.display = 'none'; 
    deleteEventModal.style.display = 'none';
    backDrop.style.display= 'none'; 
    eventTitleInput.value = ' ';
    eventTitleInputTwo.value= ' '; 
    clicked = null; 
    load(); 
   
}
function saveEvent(){
    if (eventTitleInput.value && eventTitleInputTwo.value){ 
        eventTitleInputTwo.classList.remove('error');
        eventTitleInput.classList.remove('error');

        events.push({
            date: clicked, 
            title: eventTitleInput.value,
            title: eventTitleInputTwo.value, 
        });
        localStorage.setItem('event', JSON.stringify(events));
        closeModal(); 
    }else{
        eventTitleInput.classList.add('error'); 
        eventTitleInputTwo.classList.add('error');
    }
}

function deleteEvent() {
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('events', JSON.stringify(events)); 
    closeModal(); 
}
function inButton(){ 
    document.getElementById('saveButton').addEventListener('click', saveEvent);
    document.getElementById('cancelButton').addEventListener('click', closeModal); 

    document.getElementById('deleteButton').addEventListener('click', deleteEvent);
    document.getElementById('closeButton').addEventListener('click', closeModal); 
  
}

inButton(); 
load(); 