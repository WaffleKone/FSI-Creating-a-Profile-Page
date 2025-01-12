let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let dogDetailsH3 = document.createElement('h3')
dogDetails.append(dogDetailsH3)
dogDetailsH3.textContent = 'Description:'

let dogDetailsP = document.createElement('p')
dogDetailsP.textContent = "This gentle dog is aloof toward her owner, and never comes when called.\
She always acts as though any stranger she meets will harm her, and\
 dislikes other animals."
dogDetails.append(dogDetailsP)

let dogDetailsH3Again = document.createElement('h3')
dogDetailsH3Again.textContent = 'Feeding Times:'
dogDetails.append(dogDetailsH3Again)

let feedingList = document.createElement('ul')
dogDetails.append(feedingList)

let feedingList1 = document.createElement('li')
feedingList1.textContent = '9:00 am'
feedingList.append(feedingList1)

let feedingList2 = document.createElement('li')
feedingList2.textContent = '12:00 pm'
feedingList.append(feedingList2)

let feedingList3 = document.createElement('li')
feedingList3.textContent = '5:00 pm'
feedingList.append(feedingList3)