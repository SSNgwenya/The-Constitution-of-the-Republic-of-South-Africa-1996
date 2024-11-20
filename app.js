// JavaScript for Dropdown functionality
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
}

const headerImages = [
    'images/kruger_national_park-1714.jpg',
    'images/flag1.jpeg',
    'images/leopard1.jpg',
    'images/zbra2.jpg',
    'images/cape-town.jpg',
    'images/rhino.jpg',
    'images/graph.jpeg',
    'images/buffalo.jpg',
    'images/indlulamithi.jpg',
    'images/gamerange.jpg',
    'images/ndlovu.jpg',
    'images/jhb.jpg',
    'images/boyabenyathi.jpg',
    'images/rhino1.jpg',
];

const dynamicImage = document.getElementById('dynamic-image');
const cautionImage = document.getElementById('caution-image');
const slides = document.querySelector('.slides');
const cautionSlide = document.querySelector('.caution-slide');
const bannerMessage = document.querySelector('.banner-message');
let index = 0;

function getLuminance(color) {
  const rgb = color.match(/\d+/g).map(Number);
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  return luminance;
}

function adjustTextColor() {
  const bgColor = window.getComputedStyle(cautionSlide).backgroundColor;
  const luminance = getLuminance(bgColor);

  if (luminance > 0.5) {
    bannerMessage.style.color = 'black';
  } else {
    bannerMessage.style.color = 'white';
  }
}

function setImages() {
  const randomImageFirstSlide = headerImages[Math.floor(Math.random() * headerImages.length)];
  dynamicImage.src = randomImageFirstSlide;

  const randomImageSecondSlide = headerImages[Math.floor(Math.random() * headerImages.length)];
  cautionImage.src = randomImageSecondSlide;

  adjustTextColor();
}

function showNextSlide() {
  index = (index + 1) % slides.children.length;
  slides.style.transform = `translateX(-${index * 100}%)`;

  if (index === 0) {
    const randomImageFirstSlide = headerImages[Math.floor(Math.random() * headerImages.length)];
    dynamicImage.src = randomImageFirstSlide;
  }
  if (index === 1) {
    const randomImageSecondSlide = headerImages[Math.floor(Math.random() * headerImages.length)];
    cautionImage.src = randomImageSecondSlide;
    adjustTextColor();
  }
}

setImages();
setInterval(showNextSlide, 5000);

cautionSlide.addEventListener('click', function() {
  window.open('https://www.gov.za/documents/constitution', '_blank');
});


// JavaScript for Search Functionality - Indexed Search
const searchBar = document.querySelector('.search-bar input[type="text"]');
const searchButton = document.querySelector('.search-bar button');

// Indexed chapter data (title, snippet, and subheadings for search)
const chapterIndex = [
    {
        title: 'Chapter 1: Founding Provisions',
        url: 'chapters/chapter1.html',
        topics: [
            {
                subheading: '1. Republic of South Africa',
                content: 'The Republic of South Africa is one, sovereign, democratic state founded on the following...'
            },
            {
                subheading: '2. Supremacy of Constitution',
                content: 'This Constitution is the supreme law of the Republic; law or conduct inconsistent with it is...'
            },
            {
                subheading: '3. Citizenship',
                content: 'There is a common South African citizenship...'
            },
            {
                subheading: '4. National anthem',
                content: 'The national anthem of the Republic is determined by the President by proclamation...'
            },
            {
                subheading: '5. National flag',
                content: 'The national flag of the Republic is black, gold, green, white, red and blue, as described...'
            },
            {
                subheading: '6. Languages',
                content: 'The official languages of the Republic are Sepedi, Sesotho, Setswana, siSwati,...'
            },
            // Add more topics here
        ]
    },
    {
        title: 'Chapter 2: Bill of Rights',
        url: 'chapters/chapter2.html',
        topics: [
            {
                subheading: '7. Rights',
                content: 'This Bill of Rights is a cornerstone of democracy in South Africa. It enshrines the rights of all people in our country and affirms the democratic values of human...'
            },
            {
                subheading: '8. Application',
                content: 'The Bill of Rights applies to all law, and binds the legislature, the executive, the...'
            },
            {
                subheading: '9. Equality',
                content: 'Everyone is equal before the law and has the right to equal protection and benefit of...'
            },
            {
                subheading: '10. Human dignity',
                content: 'Everyone has inherent dignity and the right to have their dignity respected and protected.'
            },
            {
                subheading: '11. Life',
                content: 'Everyone has the right to life.'
            },
            {
                subheading: '12. Freedom and security of the person',
                content: 'Everyone has the right to freedom and security of the person, which includes the...'
            },
            {
                subheading: '13. Slavery, servitude and forced labour',
                content: 'No one may be subjected to slavery, servitude or forced labour...'
            },
            {
                subheading: '14. Privacy',
                content: 'Everyone has the right to privacy, which includes the right not to have—...'
            },
            {
                subheading: '15. Freedom of religion, belief and opinion',
                content: 'Everyone has the right to freedom of conscience, religion, thought, belief and...'
            },
            {
                subheading: '16. Freedom of expression',
                content: 'Everyone has the right to freedom of expression, which includes—...'
            },
            {
                subheading: '17. Assembly, demonstration, picket and petition',
                content: 'Everyone has the right, peacefully and unarmed, to assemble, to demonstrate, to picket...'
            },
            {
                subheading: '18. Freedom of association',
                content: 'Everyone has the right to freedom of association.'
            },
            {
                subheading: '19. Political rights',
                content: 'Every citizen is free to make political choices, which includes the right—...'
            },
            {
                subheading: '20. Citizenship',
                content: 'No citizen may be deprived of citizenship.'
            },
            {
                subheading: '21. Freedom of movement and residence',
                content: 'Everyone has the right to freedom of movement...'
            },
            {
                subheading: '22. Freedom of trade, occupation and profession',
                content: 'Every citizen has the right to choose their trade, occupation or profession freely. The...'
            },
            {
                subheading: '23. Labour relations',
                content: 'Everyone has the right to fair labour practices...'
            },
            {
                subheading: '24. Environment',
                content: 'Everyone has the right— (a) to an environment that is not harmful to their health or wellbeing; and...'
            },
            {
                subheading: '25. Property',
                content: 'No one may be deprived of property except in terms of law of general application...'
            },
            {
                subheading: '26. Housing',
                content: 'Everyone has the right to have access to adequate housing...'
            },
            {
                subheading: '27. Health care, food, water and social security',
                content: 'Everyone has the right to have access to—...'
            },
            {
                subheading: '28. Children',
                content: 'Every child has the right—...'
            },
            {
                subheading: '29. Education',
                content: 'Everyone has the right— (a) to a basic education...'
            },
            {
                subheading: '30. Language and culture',
                content: 'Everyone has the right to use the language and to participate in the cultural life of their...'
            },
            {
                subheading: '31. Cultural, religious and linguistic communities',
                content: 'Persons belonging to a cultural, religious or linguistic community may not be denied...'
            },
            {
                subheading: '32. Access to information',
                content: 'Everyone has the right of access to— (a) any information held by the state; and...'
            },
            {
                subheading: '33. Just administrative action',
                content: 'Everyone has the right to administrative action that is lawful, reasonable and'
            },
            {
                subheading: '34. Access to courts',
                content: 'Everyone has the right to have any dispute that can be resolved by the application of law...'
            },
            {
                subheading: '35. Arrested, detained and accused persons',
                content: 'Everyone who is arrested for allegedly committing an offence has the right—...'
            },
            {
                subheading: '36. Limitation of rights',
                content: 'The rights in the Bill of Rights may be limited only in terms of law of general...'
            },
            {
                subheading: '37. States of emergency',
                content: 'A state of emergency may be declared only in terms of an Act of Parliament, and...'
            },
            // Add more topics for this chapter
        ]
    },
    {
        title: 'Chapter 3: Co-operative Government',
        url: 'chapters/chapter3.html',
        topics: [
            {
                subheading: '40. Government of the Republic',
                content: 'In the Republic, government is constituted as national, provincial...'
            },
            {
                subheading: '41. Principles of co-operative government and intergovernmental relations',
                content: 'All spheres of government and all organs of state within each sphere must—...'
            },
            // Add more topics here
        ]
    },
    {
        title: 'Chapter 4: Parliament',
        url: 'chapters/chapter4.html',
        topics: [
            {
                subheading: '42. Composition of Parliament',
                content: 'Parliament consists of— (a) the National Assembly; and (b) the National Council of Provinces...'
            },
            {
                subheading: '43. Legislative authority of the Republic',
                content: 'In the Republic, the legislative authority— (a) of the national sphere of government is vested in Parliament, as set out in section 44;...'
            },
            {
                subheading: '44. National legislative authority',
                content: 'The national legislative authority as vested in Parliament— (a) confers on the National Assembly the power—...'
            },
            {
                subheading: '45. Joint rules and orders and joint committees',
                content: 'The National Assembly and the National Council of Provinces must establish a joint...'
            },
            {
                subheading: 'The National Assembly',
                content: 'Composition and election...'
            },
            {
                subheading: '46. Composition and election',
                content: 'The National Assembly consists of no fewer than 350 and no more than 400 women...'
            },
            {
                subheading: '47. Membership',
                content: 'Every citizen who is qualified to vote for the National Assembly is eligible to be a...'
            },
            {
                subheading: '48. Oath or affirmation',
                content: 'Before members of the National Assembly begin to perform their functions in the Assembly, they must swear or affirm faithfulness to the...'
            },
            {
                subheading: '49. Duration of National Assembly',
                content: 'The National Assembly is elected for a term of five years...'
            },
            {
                subheading: '50. Dissolution of National Assembly before expiry of its term',
                content: 'The President must dissolve the National Assembly if—...'
            },
            {
                subheading: '51. Sittings and recess periods',
                content: 'After an election, the first sitting of the National Assembly must take place at a...'
            },
            {
                subheading: '52. Speaker and Deputy Speaker',
                content: 'At the first sitting after its election, or when necessary to fill a vacancy, the National...'
            },
            {
                subheading: '53. Decisions',
                content: 'Except where the Constitution provides otherwise—...'
            },
            {
                subheading: '54. Rights of certain Cabinet members and Deputy Ministers in the National Assembly',
                content: 'The President, and any member of the Cabinet or any Deputy Minister who is not a...'
            },
            {
                subheading: '55. Powers of National Assembly',
                content: 'In exercising its legislative power, the National Assembly may—...'
            },
            {
                subheading: '56. Evidence or information before National Assembly',
                content: 'The National Assembly or any of its committees may—...'
            },
            {
                subheading: '57. Internal arrangements, proceedings and procedures of National Assembly',
                content: 'The National Assembly may— (a) determine and control its internal arrangements, proceedings and procedures...'
            },
            {
                subheading: '58. Privilege',
                content: 'Cabinet members, Deputy Ministers and members of the National Assembly— ...'
            },
            {
                subheading: '59. Public access to and involvement in National Assembly',
                content: 'The National Assembly must— (a) facilitate public involvement in the legislative and other processes of the...'
            },
            {
                subheading: 'National Council of Provinces',
                content: 'Composition of National Council'
            },
            {
                subheading: '60. Composition of National Council',
                content: 'The National Council of Provinces is composed of a single delegation from each...'
            },
            {
                subheading: '61. Allocation of delegates',
                content: 'Parties represented in a provincial legislature are entitled to delegates in the...'
            },
            {
                subheading: '62. Permanent delegates',
                content: 'A person nominated as a permanent delegate must be eligible to be a member of...'
            },
            {
                subheading: '63. Sittings of National Council',
                content: 'The National Council of Provinces may determine the time and duration of its...'
            },
            {
                subheading: '64. Chairperson and Deputy Chairpersons',
                content: 'The National Council of Provinces must elect a Chairperson and two Deputy...'
            },
            {
                subheading: '65. Decisions',
                content: 'Except where the Constitution provides otherwise—...'
            },
            {
                subheading: '66. Participation by members of national executive',
                content: 'Cabinet members and Deputy Ministers may attend, and may speak in, the National...'
            },
            {
                subheading: '67. Participation by local government representatives',
                content: 'Not more than ten part-time representatives designated by organised local government...'
            },
            {
                subheading: '68. Powers of National Council',
                content: 'In exercising its legislative power, the National Council of Provinces may—...'
            },
            {
                subheading: '69. Evidence or information before National Council',
                content: 'The National Council of Provinces or any of its committees may—...'
            },
            {
                subheading: '70. Internal arrangements, proceedings and procedures of National Council',
                content: 'The National Council of Provinces may—...'
            },
            {
                subheading: '71. Privilege',
                content: 'Delegates to the National Council of Provinces and the persons referred to in...'
            },
            {
                subheading: '72. Public access to and involvement in National Council',
                content: 'The National Council of Provinces must—...'
            },
            {
                subheading: 'National Legislative Process',
                content: 'All Bills...'
            },
            {
                subheading: '73. All Bills',
                content: 'Any Bill may be introduced in the National Assembly...'
            },
            {
                subheading: '74. Bills amending the Constitution',
                content: 'Section 1 and this subsection may be amended by a Bill passed by—...'
            },
            {
                subheading: '75. Ordinary Bills not affecting provinces',
                content: 'When the National Assembly passes a Bill other than a Bill to which the procedure...'
            },
            {
                subheading: '76. Ordinary Bills affecting provinces',
                content: 'When the National Assembly passes a Bill referred to in subsection (3), (4) or (5),...'
            },
            {
                subheading: '77. Money Bills',
                content: 'A Bill is a money Bill if it— (a) appropriates money...'
            },
            {
                subheading: '78. Mediation Committee',
                content: 'The Mediation Committee consists of—...'
            },
            {
                subheading: '79. Assent to Bills',
                content: 'The President must either assent to and sign a Bill passed in terms of this Chapter or,...'
            },
            {
                subheading: '80. Application by members of National Assembly to Constitutional Court',
                content: 'Members of the National Assembly may apply to the Constitutional Court for an...'
            },
            {
                subheading: '81. Publication of Acts',
                content: 'A Bill assented to and signed by the President becomes an Act of Parliament, must be...'
            },
            {
                subheading: '82. Safekeeping of Acts of Parliament',
                content: 'The signed copy of an Act of Parliament is conclusive evidence of the provisions of that Act...'
            },
            // Add more topics for this chapter
        ]
    },
    {
        title: 'Chapter 5: The President and National Executive',
        url: 'chapters/chapter5.html',
        topics: [
            {
                subheading: '83. The President',
                content: 'The President— (a) is the Head of State and head of the national executive...'
            },
            {
                subheading: '84. Powers and functions of President',
                content: 'The President has the powers entrusted by the Constitution and legislation...'
            },
            {
                subheading: '85. Executive authority of the Republic',
                content: 'The executive authority of the Republic is vested in the President...'
            },
            {
                subheading: '86. Election of President',
                content: 'At its first sitting after its election, and whenever necessary to fill a vacancy, the...'
            },
            {
                subheading: '87. Assumption of office by President',
                content: 'When elected President, a person ceases to be a member of the National Assembly and...'
            },
            {
                subheading: '88. Term of office of President',
                content: 'The President’s term of office begins on assuming office and ends upon a vacancy...'
            },
            {
                subheading: '89. Removal of President',
                content: 'The National Assembly, by a resolution adopted with a supporting vote of at least...'
            },
            {
                subheading: '90. Acting President',
                content: 'When the President is absent from the Republic or otherwise unable to fulfil the...'
            },
            {
                subheading: '91. Cabinet',
                content: 'The Cabinet consists of the President, as head of the Cabinet, a Deputy President and...'
            },
            {
                subheading: '92. Accountability and responsibilities',
                content: 'The Deputy President and Ministers are responsible for the powers and functions of...'
            },
            {
                subheading: '93. Deputy Ministers',
                content: 'The President may appoint— (a) any number of Deputy Ministers from among the members of the National...'
            },
            {
                subheading: '94. Continuation of Cabinet after elections',
                content: 'When an election of the National Assembly is held, the Cabinet, the Deputy President...'
            },
            {
                subheading: '95. Oath or affirmation',
                content: 'Before the Deputy President, Ministers and any Deputy Ministers begin to perform their...'
            },
            {
                subheading: '96. Conduct of Cabinet members and Deputy Ministers',
                content: 'Members of the Cabinet and Deputy Ministers must act in accordance with a code of...'
            },
            {
                subheading: '97. Transfer of functions',
                content: 'The President by proclamation may transfer to a member of the Cabinet—...'
            },
            {
                subheading: '98. Temporary assignment of functions',
                content: 'The President may assign to a Cabinet member any power or function of another member...'
            },
            {
                subheading: '99. Assignment of functions',
                content: 'A Cabinet member may assign any power or function that is to be exercised or performed...'
            },
            {
                subheading: '100. National intervention in provincial administration',
                content: 'When a province cannot or does not fulfil an executive obligation in terms of the...'
            },
            {
                subheading: '101. Executive decisions',
                content: 'A decision by the President must be in writing if it—...'
            },
            {
                subheading: '102. Motions of no confidence',
                content: 'If the National Assembly, by a vote supported by a majority of its members, passes a...'
            },
            // Add more topics here
        ]
    },
    {
        title: 'Chapter 6: Provinces',
        url: 'chapters/chapter6.html',
        topics: [
            {
                subheading: '103. Provinces',
                content: 'The Republic has the following provinces: (a) Eastern Cape...'
            },
            {
                subheading: 'Provincial Legislatures',
                content: 'Legislative authority of provinces...'
            },
            {
                subheading: '104. Legislative authority of provinces',
                content: 'The legislative authority of a province is vested in its provincial legislature, and...'
            },
            {
                subheading: '105. Composition and election of provincial legislatures',
                content: 'A a provincial legislature consists of women and men elected as members in terms...'
            },
            {
                subheading: '106. Membership',
                content: 'Every citizen who is qualified to vote for the National Assembly is eligible to be a...'
            },
            {
                subheading: '107. Oath or affirmation',
                content: 'Before members of a provincial legislature begin to perform their functions in the...'
            },
            {
                subheading: '108. Duration of provincial legislatures',
                content: 'A provincial legislature is elected for a term of five years...'
            },
            {
                subheading: '109. Dissolution of provincial legislatures before expiry of term',
                content: 'The Premier of a province must dissolve the provincial legislature if—...'
            },
            {
                subheading: '110. Sittings and recess periods',
                content: 'After an election, the first sitting of a provincial legislature must take place at a time...'
            },
            {
                subheading: '111. Speakers and Deputy Speakers',
                content: 'At the first sitting after its election, or when necessary to fill a vacancy, a provincial...'
            },
            {
                subheading: '112. Decisions',
                content: 'Except where the Constitution provides otherwise—...'
            },
            {
                subheading: '113. Permanent delegates’ rights in provincial legislatures',
                content: 'A province’s permanent delegates to the National Council of Provinces may attend, and...'
            },
            {
                subheading: '114. Powers of provincial legislatures',
                content: 'In exercising its legislative power, a provincial legislature may—...'
            },
            {
                subheading: '115. Evidence or information before provincial legislatures',
                content: 'A provincial legislature or any of its committees may—...'
            },
            {
                subheading: '116. Internal arrangements, proceedings and procedures of provincial legislatures',
                content: 'A provincial legislature may— (a) determine and control its internal arrangements, proceedings and procedures...'
            },
            {
                subheading: '117. Privilege',
                content: 'Members of a provincial legislature and the province’s permanent delegates to the...'
            },
            {
                subheading: '118. Public access to and involvement in provincial legislatures',
                content: 'A provincial legislature must— (a) facilitate public involvement in the legislative and other processes of the...'
            },
            {
                subheading: '119. Introduction of Bills',
                content: 'Only members of the Executive Council of a province or a committee or member of a...'
            },
            {
                subheading: '120. Money Bills',
                content: 'A Bill is a money Bill if it— (a) appropriates money...'
            },
            {
                subheading: '121. Assent to Bills',
                content: 'The Premier of a province must either assent to and sign a Bill passed by the...'
            },
            {
                subheading: '122. Application by members to Constitutional Court',
                content: 'Members of a provincial legislature may apply to the Constitutional Court for an...'
            },
            {
                subheading: '123. Publication of provincial Acts',
                content: 'A Bill assented to and signed by the Premier of a province becomes a provincial Act, must...'
            },
            {
                subheading: '124. Safekeeping of provincial Acts',
                content: 'The signed copy of a provincial Act is conclusive evidence of the provisions of that Act and...'
            },
            {
                subheading: 'Provincial Executives',
                content: 'Executive authority of provinces...'
            },
            {
                subheading: '125. Executive authority of provinces',
                content: 'The executive authority of a province is vested in the Premier of that province...'
            },
            {
                subheading: '126. Assignment of functions',
                content: 'A member of the Executive Council of a province may assign any power or function that...'
            },
            {
                subheading: '127. Powers and functions of Premiers',
                content: 'The Premier of a province has the powers and functions entrusted to that office by...'
            },
            {
                subheading: '128. Election of Premiers',
                content: 'At its first sitting after its election, and whenever necessary to fill a vacancy, a...'
            },
            {
                subheading: '129. Assumption of office by Premiers',
                content: 'A Premier-elect must assume office within five days of being elected, by swearing or...'
            },
            {
                subheading: '130. Term of office and removal of Premiers',
                content: 'A Premier’s term of office begins when the Premier assumes office and ends upon a...'
            },
            {
                subheading: '131. Acting Premiers',
                content: 'When the Premier is absent or otherwise unable to fulfil the duties of the office of...'
            },
            {
                subheading: '132. Executive Councils',
                content: 'The Executive Council of a province consists of the Premier, as head of the Council...'
            },
            {
                subheading: '133. Accountability and responsibilities',
                content: 'The members of the Executive Council of a province are responsible for the functions...'
            },
            {
                subheading: '134. Continuation of Executive Councils after elections',
                content: 'When an election of a provincial legislature is held, the Executive Council and its members...'
            },
            {
                subheading: '135. Oath or affirmation',
                content: 'Before members of the Executive Council of a province begin to perform their functions...'
            },
            {
                subheading: '136. Conduct of members of Executive Councils',
                content: 'Members of the Executive Council of a province must act in accordance with a code...'
            },
            {
                subheading: '137. Transfer of functions',
                content: 'The Premier by proclamation may transfer to a member of the Executive Council—...'
            },
            {
                subheading: '138. Temporary assignment of functions',
                content: 'The Premier of a province may assign to a member of the Executive Council any power or...'
            },
            {
                subheading: '139. Provincial intervention in local government',
                content: 'When a municipality cannot or does not fulfil an executive obligation in terms of the...'
            },
            {
                subheading: '140. Executive decisions',
                content: 'A decision by the Premier of a province must be in writing if it—...'
            },
            {
                subheading: '141. Motions of no confidence',
                content: 'If a provincial legislature, by a vote supported by a majority of its members, passes...'
            },
            {
                subheading: 'Provincial Constitutions',
                content: 'Adoption of provincial constitutions...'
            },
            {
                subheading: '142. Adoption of provincial constitutions',
                content: 'A provincial legislature may pass a constitution for the province or, where applicable...'
            },
            {
                subheading: '143. Contents of provincial constitutions',
                content: 'A provincial constitution, or constitutional amendment, must not be inconsistent...'
            },
            {
                subheading: '144. Certification of provincial constitutions',
                content: 'If a provincial legislature has passed or amended a constitution, the Speaker of the...'
            },
            {
                subheading: '145. Signing, publication and safekeeping of provincial constitutions',
                content: 'The Premier of a province must assent to and sign the text of a provincial...'
            },
            {
                subheading: 'Conflicting Laws',
                content: 'Conflicts between national and provincial legislation...'
            },
            {
                subheading: '146. Conflicts between national and provincial legislation',
                content: 'This section applies to a conflict between national legislation and provincial...'
            },
            {
                subheading: '147. Other conflicts',
                content: 'If there is a conflict between national legislation and a provision of a provincial...'
            },
            {
                subheading: '148. Conflicts that cannot be resolved',
                content: 'If a dispute concerning a conflict cannot be resolved by a court, the national legislation...'
            },
            {
                subheading: '149. Status of legislation that does not prevail',
                content: 'A decision by a court that legislation prevails over other legislation does not invalidate that...'
            },
            {
                subheading: '150. Interpretation of conflicts',
                content: 'When considering an apparent conflict between national and provincial legislation, or...'
            },
            // Add more topics for this chapter
        ]
    },
    {
        title: 'Chapter 7: Local Government',
        url: 'chapters/chapter7.html',
        topics: [
            {
                subheading: '151. Status of municipalities',
                content: 'The local sphere of government consists of municipalities, which must be...'
            },
            {
                subheading: '152. Objects of local government',
                content: 'The objects of local government are—...'
            },
            {
                subheading: '153. Developmental duties of municipalities',
                content: 'A municipality must— (a) structure and manage its administration and budgeting and planning...'
            },
            {
                subheading: '154. Municipalities in co-operative government',
                content: 'The national government and provincial governments, by legislative and other...'
            },
            {
                subheading: '155. Establishment of municipalities',
                content: 'There are the following categories of municipality...'
            },
            {
                subheading: '156. Powers and functions of municipalities',
                content: 'A municipality has executive authority in respect of, and has the right to...'
            },
            {
                subheading: '157. Composition and election of Municipal Councils',
                content: 'A Municipal Council consists of— (a) members elected in accordance with subsections (2) and (3); or...'
            },
            {
                subheading: '158. Membership of Municipal Councils',
                content: 'Every citizen who is qualified to vote for a Municipal Council is eligible to be a...'
            },
            {
                subheading: '159. Terms of Municipal Councils',
                content: 'The term of a Municipal Council may be no more than five years, as...'
            },
            {
                subheading: '160. Internal procedures',
                content: 'A Municipal Council— (a) makes decisions concerning the exercise of all the powers and the performance...'
            },
            {
                subheading: '161. Privilege',
                content: 'Provincial legislation within the framework of national legislation may provide for...'
            },
            {
                subheading: '162. Publication of municipal by-laws',
                content: 'A municipal by-law may be enforced only after it has been published in the official...'
            },
            {
                subheading: '163. Organised local government',
                content: 'An Act of Parliament enacted in accordance with the procedure established by section 76...'
            },
            {
                subheading: '164. Other matters',
                content: 'Any matter concerning local government not dealt with in the Constitution may be...'
            },
            // Add more topics here
        ]
    },
    {
        title: 'Chapter 8: Courts and Administration of Justice',
        url: 'chapters/chapter8.html',
        topics: [
            {
                subheading: '165. Judicial authority',
                content: 'The judicial authority of the Republic is vested in the courts...'
            },
            {
                subheading: '166. Judicial system',
                content: 'The courts are— (a) the Constitutional Court...'
            },
            {
                subheading: '167. Constitutional Court',
                content: 'The Constitutional Court consists of the Chief Justice of South Africa, the Deputy...'
            },
            {
                subheading: '168. Supreme Court of Appeal',
                content: 'The Supreme Court of Appeal consists of a President, a Deputy President and the...'
            },
            {
                subheading: '169. High Court of South Africa',
                content: 'The High Court of South Africa may decide— (a) any constitutional matter except a matter that—...'
            },
            {
                subheading: '170. Other courts',
                content: 'All courts other than those referred to in sections 167, 168 and 169 may decide any matter...'
            },
            {
                subheading: '171. Court procedures',
                content: 'All courts function in terms of national legislation, and their rules and procedures must be...'
            },
            {
                subheading: '172. Powers of courts in constitutional matters',
                content: 'When deciding a constitutional matter within its power, a court—...'
            },
            {
                subheading: '173. Inherent power',
                content: 'The Constitutional Court, the Supreme Court of Appeal and the High Court of South Africa...'
            },
            {
                subheading: '174. Appointment of judicial officers',
                content: 'Any appropriately qualified woman or man who is a fit and proper person may be...'
            },
            {
                subheading: '175. Appointment of acting judges',
                content: 'The President may appoint a woman or a man to serve as an acting Deputy Chief...'
            },
            {
                subheading: '176. Terms of office and remuneration',
                content: 'A Constitutional Court judge holds office for a non-renewable term of 12 years, or...'
            },
            {
                subheading: '177. Removal',
                content: 'A judge may be removed from office only if— (a) the Judicial Service Commission finds that the judge suffers from an incapacity...'
            },
            {
                subheading: '178. Judicial Service Commission',
                content: 'There is a Judicial Service Commission consisting of—...'
            },
            {
                subheading: '179. Prosecuting authority',
                content: 'There is a single national prosecuting authority in the Republic, structured in terms...'
            },
            {
                subheading: '180. Other matters concerning administration of justice',
                content: 'National legislation may provide for any matter concerning the administration of justice...'
            },
            // Add more topics for this chapter
        ]
    },
    {
        title: 'Chapter 9: State Institutions supporting Constitutional Democracy',
        url: 'chapters/chapter9.html',
        topics: [
            {
                subheading: '181. Establishment and governing principles',
                content: 'The following state institutions strengthen constitutional democracy in the...'
            },
            {
                subheading: 'Public Protector',
                content: 'Functions of Public Protector...'
            },
            {
                subheading: '182. Functions of Public Protector',
                content: 'The Public Protector has the power, as regulated by national legislation—...'
            },
            {
                subheading: '183. Tenure',
                content: 'The Public Protector is appointed for a non-renewable period of seven years.'
            },
            {
                subheading: 'South African Human Rights Commission',
                content: 'Functions of South African Human Rights Commission...'
            },
            {
                subheading: '184. Functions of South African Human Rights Commission',
                content: 'The South African Human Rights Commission must—...'
            },
            {
                subheading: 'Commission for the Promotion and Protection of the Rights of Cultural, Religious and Linguistic Communities',
                content: 'Functions of Commission...'
            },
            {
                subheading: '185. Functions of Commission',
                content: 'The primary objects of the Commission for the Promotion and Protection of the...'
            },
            {
                subheading: '186. Composition of Commission',
                content: 'The number of members of the Commission for the Promotion and Protection of the...'
            },
            {
                subheading: 'Commission for Gender Equality',
                content: 'Functions of Commission for Gender Equality...'
            },
            {
                subheading: '187. Functions of Commission for Gender Equality',
                content: 'The Commission for Gender Equality must promote respect for gender equality and...'
            },
            {
                subheading: 'Auditor-General',
                content: 'Functions of Auditor-General...'
            },
            {
                subheading: '188. Functions of Auditor-General',
                content: 'The Auditor-General must audit and report on the accounts, financial...'
            },
            {
                subheading: '189. Tenure',
                content: 'The Auditor-General must be appointed for a fixed, non-renewable term of between five...'
            },
            {
                subheading: 'Electoral Commission',
                content: 'Functions of Electoral Commission...'
            },
            {
                subheading: '190. Functions of Electoral Commission',
                content: 'The Electoral Commission must—...'
            },
            {
                subheading: '191. Composition of Electoral Commission',
                content: 'The Electoral Commission must be composed of at least three persons. The number of...'
            },
            {
                subheading: 'Independent Authority to Regulate Broadcasting',
                content: 'Broadcasting Authority...'
            },
            {
                subheading: '192. Broadcasting Authority',
                content: 'National legislation must establish an independent authority to regulate broadcasting in...'
            },
            {
                subheading: 'General Provisions',
                content: 'Appointments...'
            },
            {
                subheading: '193. Appointments',
                content: 'The Public Protector and the members of any Commission established by this...'
            },
            {
                subheading: '194. Removal from office',
                content: 'The Public Protector, the Auditor-General or a member of a Commission established...'
            },
            // Add more topics here
        ]
    },
    {
        title: 'Chapter 10: Public Administration',
        url: 'chapters/chapter10.html',
        topics: [
            {
                subheading: '195. Basic values and principles governing public administration',
                content: 'Public administration must be governed by the democratic values and principles...'
            },
            {
                subheading: '196. Public Service Commission',
                content: 'There is a single Public Service Commission for the Republic...'
            },
            {
                subheading: '197. Public Service',
                content: 'Within public administration there is a public service for the Republic, which must...'
            },
            // Add more topics for this chapter
        ]
    },
    {
        title: 'Chapter 11: Security Services',
        url: 'chapters/chapter11.html',
        topics: [
            {
                subheading: '198. Governing principles',
                content: 'The following principles govern national security in the Republic...'
            },
            {
                subheading: '199. Establishment, structuring and conduct of security services',
                content: 'The security services of the Republic consist of a single defence force, a single police...'
            },
            {
                subheading: 'Defence',
                content: 'Defence force...'
            },
            {
                subheading: '200. Defence force',
                content: 'The defence force must be structured and managed as a disciplined military force...'
            },
            {
                subheading: '201. Political responsibility',
                content: 'A member of the Cabinet must be responsible for defence...'
            },
            {
                subheading: '202. Command of defence force',
                content: 'The President as head of the national executive is Commander-in-Chief of the...'
            },
            {
                subheading: '203. State of national defence',
                content: 'The President as head of the national executive may declare a state of...'
            },
            {
                subheading: '204. Defence civilian secretariat',
                content: 'A civilian secretariat for defence must be established by national legislation to function...'
            },
            {
                subheading: 'Police',
                content: 'Police service...'
            },
            {
                subheading: '205. Police service',
                content: 'The national police service must be structured to function in the national, provincial...'
            },
            {
                subheading: '206. Political responsibility',
                content: 'A member of the Cabinet must be responsible for policing and must determine...'
            },
            {
                subheading: '207. Control of police service',
                content: 'The President as head of the national executive must appoint a woman or a man as...'
            },
            {
                subheading: '208. Police civilian secretariat',
                content: 'A civilian secretariat for the police service must be established by national legislation to...'
            },
            {
                subheading: 'Intelligence',
                content: 'Establishment and control of intelligence services...'
            },
            {
                subheading: '209. Establishment and control of intelligence services',
                content: 'Any intelligence service, other than any intelligence division of the defence force...'
            },
            {
                subheading: '210. Powers, functions and monitoring',
                content: 'National legislation must regulate the objects, powers and functions of the intelligence...'
            },
            // Add more topics here
        ]
    },
    {
        title: 'Chapter 12: Traditional Leaders',
        url: 'chapters/chapter12.html',
        topics: [
            {
                subheading: '211. Recognition',
                content: 'The institution, status and role of traditional leadership, according to customary law...'
            },
            {
                subheading: '212. Role of traditional leaders',
                content: 'National legislation may provide for a role for traditional leadership as an institution...'
            },
            // Add more topics for this chapter
        ]
    },
    {
        title: 'Chapter 13: Finance',
        url: 'chapters/chapter13.html',
        topics: [
            {
                subheading: 'General Financial Matters',
                content: 'National Revenue Fund...'
            },
            {
                subheading: '213. National Revenue Fund',
                content: 'There is a National Revenue Fund into which all money received by the national...'
            },
            {
                subheading: '214. Equitable shares and allocations of revenue',
                content: 'An Act of Parliament must provide for—...'
            },
            {
                subheading: '215. National, provincial and municipal budgets',
                content: 'National, provincial and municipal budgets and budgetary processes must promote...'
            },
            {
                subheading: '216. Treasury control',
                content: 'National legislation must establish a national treasury and prescribe measures to...'
            },
            {
                subheading: '217. Procurement',
                content: 'When an organ of state in the national, provincial or local sphere of government...'
            },
            {
                subheading: '218. Government guarantees',
                content: 'The national government, a provincial government or a municipality may guarantee...'
            },
            {
                subheading: '219. Remuneration of persons holding public office',
                content: 'An Act of Parliament must establish a framework for determining—...'
            },
            {
                subheading: 'Financial and Fiscal Commission',
                content: 'Establishment and functions...'
            },
            {
                subheading: '220. Establishment and functions',
                content: 'There is a Financial and Fiscal Commission for the Republic which makes...'
            },
            {
                subheading: '221. Appointment and tenure of members',
                content: 'The Commission consists of the following women and men appointed by the...'
            },
            {
                subheading: '222. Reports',
                content: 'The Commission must report regularly both to Parliament and to the provincial...'
            },
            {
                subheading: 'Central Bank',
                content: 'Establishment...'
            },
            {
                subheading: '223. Establishment',
                content: 'The South African Reserve Bank is the central bank of the Republic and is regulated in...'
            },
            {
                subheading: '224. Primary object',
                content: 'The primary object of the South African Reserve Bank is to protect the value of...'
            },
            {
                subheading: '225. Powers and functions',
                content: 'The powers and functions of the South African Reserve Bank are those customarily...'
            },
            {
                subheading: 'Provincial and Local Financial Matters',
                content: 'Provincial Revenue Funds...'
            },
            {
                subheading: '226. Provincial Revenue Funds',
                content: 'There is a Provincial Revenue Fund for each province into which all money received...'
            },
            {
                subheading: '227. National sources of provincial and local government funding',
                content: 'Local government and each province—...'
            },
            {
                subheading: '228. Provincial taxes',
                content: 'A provincial legislature may impose—...'
            },
            {
                subheading: '229. Municipal fiscal powers and functions',
                content: 'Subject to subsections (2), (3) and (4), a municipality may impose—...'
            },
            {
                subheading: '230. Provincial loans',
                content: 'A province may raise loans for capital or current expenditure in accordance with...'
            },
            {
                subheading: '230A. Municipal loans',
                content: 'A Municipal Council may, in accordance with national legislation—...'
            },
            // Add more topics here
        ]
    },
    {
        title: 'Chapter 14: General Provisions',
        url: 'chapters/chapter14.html',
        topics: [
            {
                subheading: 'International Law',
                content: 'International agreements...'
            },
            {
                subheading: '231. International agreements',
                content: 'The negotiating and signing of all international agreements is the responsibility of...'
            },
            {
                subheading: '232. Customary international law',
                content: 'Customary international law is law in the Republic unless it is inconsistent with the...'
            },
            {
                subheading: '233. Application of international law',
                content: 'When interpreting any legislation, every court must prefer any reasonable interpretation...'
            },
            {
                subheading: 'Other Matters',
                content: 'Charters of Rights...'
            },
            {
                subheading: '234. Charters of Rights',
                content: 'In order to deepen the culture of democracy established by the Constitution, Parliament'
            },
            {
                subheading: '235. Self-determination',
                content: 'The right of the South African people as a whole to self-determination, as manifested in...'
            },
            {
                subheading: '236. Funding for political parties',
                content: 'To enhance multi-party democracy, national legislation must provide for the funding of...'
            },
            {
                subheading: '237. Diligent performance of obligations',
                content: 'All constitutional obligations must be performed diligently and without delay.'
            },
            {
                subheading: '238. Agency and delegation',
                content: 'An executive organ of state in any sphere of government may—...'
            },
            {
                subheading: '239. Definitions',
                content: 'In the Constitution, unless the context indicates otherwise—...'
            },
            {
                subheading: '240. Inconsistencies between different texts',
                content: 'In the event of an inconsistency between different texts of the Constitution, the English...'
            },
            {
                subheading: '241. Transitional arrangements',
                content: 'Schedule 6 applies to the transition to the new constitutional order established by this...'
            },
            {
                subheading: '242. Repeal of laws',
                content: 'The laws mentioned in Schedule 7 are repealed, subject to section 243 and Schedule 6...'
            },
            {
                subheading: '243. Short title and commencement',
                content: 'This Act is called the Constitution of the Republic of South Africa, 1996, and comes...'
            },
            // Add more topics for this chapter
        ]
    },
    // Add more chapters here
];

// Function to search the index and redirect if a match is found
function searchChapters(query) {
    const normalizedQuery = query.trim().toLowerCase();

    // Find chapters or subheadings that match the search query
    const matchedChapter = chapterIndex.find(chapter => {
        // Check if the title matches
        if (chapter.title.toLowerCase().includes(normalizedQuery)) {
            return true;
        }

        // Check if any subheading matches
        const matchedSubheading = chapter.topics.some(topic => 
            topic.subheading.toLowerCase().includes(normalizedQuery)
        );

        return matchedSubheading;
    });

    if (matchedChapter) {
        // Redirect to the chapter page
        window.location.href = matchedChapter.url;

        // Optionally, scroll to a specific subheading if one was matched
        const matchedTopic = matchedChapter.topics.find(topic => 
            topic.subheading.toLowerCase().includes(normalizedQuery)
        );

        if (matchedTopic) {
            // Wait for the chapter page to load, then scroll to the subheading
            setTimeout(() => {
                const element = document.getElementById(matchedTopic.subheading.replace(/\s+/g, '-').toLowerCase());
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1000);
        }
    } else {
        alert('No results found for: ' + query);
    }
}

// Event listener for the search button
searchButton.addEventListener('click', function() {
    const query = searchBar.value.trim();
    if (query) {
        searchChapters(query);
    }
});

// Event listener for Enter key press to trigger search
searchBar.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const query = searchBar.value.trim();
        if (query) {
            searchChapters(query);
        }
    }
});
