// //state
// const dummyUser = {
//   nickname: "제로초",
//   desc: "next.js 정복하고싶어요!!",
//   Post: [],
//   Following: [],
//   Follower: [],
//   signUpData: [],
// };
// export const initialState = {
//   isLoggedIn: false,
//   user: null,
// };

// //actions
// export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
// export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
// export const SIGN_UP_FAIlURE = "SIGN_UP_FAIURE";

// export const LOG_IN_REQUEST = "LOG_IN_REQUEST"; //액션의 이름
// export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
// export const LOG_IN_FAIlURE = "LOG_IN_FAIURE";

// export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST"; //액션의 이름
// export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
// // export const LOG_OUT_FAILURE = 'LOG_OUT_FAIURE';

// // export const INCREMENT_NUMBER; //동기 요청

// // export const signUpAction = (data) => {
// //   return {
// //     type: SIGN_UP_REQUEST,
// //     data,
// //   };
// // };
// export const signUpSuccess = {
//   type: SIGN_UP_SUCCESS,
// };

// export const loginAction = (data) => {
//   return {
//     type: LOG_IN_REQUEST,
//     data,
//   };
// };

// export const logoutAction = {
//   type: LOG_OUT_REQUEST,
// };

// export default (state = initialState, action) => {
//   //다음 state를 만듦
//   switch (action.type) {
//     case LOG_IN_REQUEST: {
//       return {
//         ...state, //새로운 객체를 생성, 참조가 달라져서 state값이 달라졌구나 알게됨
//         isLoggedIn: true,
//         user: dummyUser,
//         loginData: action.data,
//         isLoggedIn: true,
//       };
//     }
//     case LOG_IN_SUCCESS: {
//       return {
//         ...state, //새로운 객체를 생성, 참조가 달라져서 state값이 달라졌구나 알게됨
//         isLoggedIn: true,
//         user: dummyUser,
//         isLoggedIn: false,
//       };
//     }
//     case LOG_OUT_REQUEST: {
//       return {
//         ...state,
//         isLoggedIn: false,
//         user: null,
//       };
//     }
//     case SIGN_UP_REQUEST: {
//       return {
//         ...state,
//         signUpData: action.data,
//       };
//     }
//     default: {
//       return {
//         ...state,
//       };
//     }
//   }
// };
