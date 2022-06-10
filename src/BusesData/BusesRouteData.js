export const getBusData = (journeyDetail, availableBuses) => {
  let arr = [];
  const { from, to, date } = journeyDetail;
  for (const bus of availableBuses) {
    const buses = busDetails[bus?.id];
    const { name, type, seats } = bus;
    const [type1, type2] = type;

    const bordingPoint = buses.filter((bus) => {
      return bus?.cityName === from;
    });

    const departurePoint = buses.filter((bus) => {
      return bus?.cityName === to;
    });

    const time = Math.abs(
      Number(bordingPoint[0]?.time) - Number(departurePoint[0]?.time)
    );

    const distance = Math.abs(
      Number(bordingPoint[0]?.distance) - Number(departurePoint[0]?.distance)
    );

    const price = distance * 2;

    arr.push({
      from,
      to,
      date,
      name,
      type: type1 + "  " + type2,
      time,
      seats,
      distance,
      price,
    });
  }
  return arr;
};

// const busData = getBusData();
// console.log({ busData });

export const busDetails = {
  bus1: [
    { id: "101", time: "13", cityName: "Chennai", distance: 0 },
    { id: "102", time: "14", cityName: "Banglore", distance: 400 },
    { id: "103", time: "15", cityName: "Hyderabad", distance: 700 },
    { id: "104", time: "16", cityName: "Karimnagar", distance: 900 },
    { id: "105", time: "17", cityName: "Mancherial", distance: 1100 },
  ],

  bus2: [
    { id: "101", time: "13", cityName: "Chennai", distance: 0 },
    { id: "102", time: "14", cityName: "Banglore", distance: 400 },
    { id: "103", time: "15", cityName: "Hyderabad", distance: 700 },
    { id: "104", time: "16", cityName: "Karimnagar", distance: 900 },
    { id: "105", time: "17", cityName: "Mancherial", distance: 1100 },
  ],

  bus3: [
    { id: "101", time: "13", cityName: "Chennai", distance: 0 },
    { id: "102", time: "14", cityName: "Banglore", distance: 400 },
    { id: "103", time: "15", cityName: "Hyderabad", distance: 700 },
    { id: "104", time: "16", cityName: "Karimnagar", distance: 900 },
    { id: "105", time: "17", cityName: "Mancherial", distance: 1100 },
  ],

  bus4: [
    { id: "101", time: "13", cityName: "Chennai", distance: 0 },
    { id: "102", time: "14", cityName: "Banglore", distance: 400 },
    { id: "103", time: "15", cityName: "Hyderabad", distance: 700 },
    { id: "104", time: "16", cityName: "Karimnagar", distance: 900 },
    { id: "105", time: "17", cityName: "Mancherial", distance: 1100 },
  ],
  bus5: [
    { id: "101", time: "13", cityName: "Chennai", distance: 0 },
    { id: "102", time: "14", cityName: "Banglore", distance: 400 },
    { id: "103", time: "15", cityName: "Hyderabad", distance: 700 },
    { id: "104", time: "16", cityName: "Karimnagar", distance: 900 },
    { id: "105", time: "17", cityName: "Mancherial", distance: 1100 },
  ],
};

export const busStands = [
  { id: "1111", name: "Chennai" },
  { id: "1112", name: "Banglore" },
  { id: "1113", name: "Hyderabad" },
  { id: "1114", name: "Karimnagar" },
  { id: "1115", name: "Mancherial" },
];

export const availableBuses = [
  {
    id: "bus1",
    name: "Orange Travels",
    type: ["A/c", "sleeper"],
    seats: 34,
  },
  {
    id: "bus2",
    name: "Diwakar Travels",
    type: ["Non A/c", "seating(2+1)"],
    seats: 21,
  },
  {
    id: "bus3",
    name: "Amaravathi Travels",
    type: ["A/c", "sleeper"],
    seats: 14,
  },
  {
    id: "bus4",
    name: "Ksrtc",
    type: ["A/c", "seating(2+1)"],
    seats: 11,
  },
  {
    id: "bus5",
    name: "Selva Tours",
    type: ["Non A/c", "sleeper"],
    seats: 31,
  },
];

// export const sidebarNavItems = [
//   {
//     display: "Dashboard",
//     icon: <ion-icon name="home-outline"></ion-icon>,
//     to: "/",
//     section: "",
//   },
//   {
//     display: "Profile",
//     icon: <ion-icon name="person-outline"></ion-icon>,
//     to: "/started",
//     section: "started",
//   },
//   {
//     display: "Search Bus",
//     icon: <ion-icon name="search-outline"></ion-icon>,
//     to: "/search",
//     section: "Search",
//   },
//   {
//     display: "Buses",
//     icon: <ion-icon name="bus-outline"></ion-icon>,
//     to: "/buses",
//     section: "Buses",
//   },
//   {
//     display: "Rservation",
//     icon: <ion-icon name="ticket-outline"></ion-icon>,
//     to: "/reservation",
//     section: "Reservation Section",
//   },
// ];

// export const busSeats = [
//   { id: 1, name: "A1" },
//   { id: 2, name: "A2" },
//   { id: 3, name: "A3" },
//   { id: 99, name: "A4" },
//   { id: 4, name: "B1" },
//   { id: 5, name: "B2" },
//   { id: 6, name: "B3" },
//   { id: 7, name: "B4" },
//   { id: 8, name: "C1" },
//   { id: 9, name: "C2" },
//   { id: 10, name: "C3" },
//   { id: 11, name: "C4" },
//   { id: 12, name: "D1" },
//   { id: 13, name: "D2" },
//   { id: 14, name: "D3" },
//   { id: 15, name: "D4" },
//   { id: 16, name: "E1" },
//   { id: 17, name: "E2" },
//   { id: 18, name: "E3" },
//   { id: 19, name: "E4" },
//   { id: 20, name: "F1" },
//   { id: 21, name: "F2" },
//   { id: 22, name: "F3" },
//   { id: 23, name: "F4" },
//   { id: 24, name: "G1" },
//   { id: 25, name: "G2" },
//   { id: 26, name: "G3" },
//   { id: 27, name: "G4" },
//   { id: 28, name: "H1" },
//   { id: 29, name: "H2" },
//   { id: 30, name: "H3" },
//   { id: 31, name: "H4" },
//   { id: 32, name: "I1" },
//   { id: 33, name: "I2" },
//   { id: 34, name: "I3" },
//   { id: 35, name: "I4" },
//   { id: 36, name: "J1" },
//   { id: 37, name: "J2" },
//   { id: 38, name: "J3" },
//   { id: 39, name: "J4" },
//   { id: 40, name: "K1" },
//   { id: 41, name: "K2" },
//   { id: 42, name: "K3" },
//   { id: 43, name: "K4" },
//   { id: 44, name: "L1" },
//   { id: 45, name: "L2" },
//   { id: 46, name: "L3" },
//   { id: 47, name: "L4" },
// ];
