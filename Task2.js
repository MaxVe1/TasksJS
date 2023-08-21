/**
 * Sort Users by quantity of their friends (listed in `friends` property).
 *
 * Input example:
 *   - Users:
 *    [
 *      { id: 1, name: 'John', friends: ['Mark', 'Dany'] },
 *      { id: 2, name: 'Ann', friends: [] },
 *      { id: 3, name: 'Mary', friends: ['Jay', 'Jack', 'Bobby'] },
 *      { id: 4, name: 'Illay', friends: ['Jay', 'Dany'] },
 *    ]
 *
 * Output example:
 *   [
 *      { id: 3, name: 'Mary', friends: ['Jay', 'Jack', 'Bobby'] },
 *      { id: 1, name: 'John', friends: ['Mark', 'Dany'] },
 *      { id: 4, name: 'Illay', friends: ['Jay', 'Dany'] },
 *      { id: 2, name: 'Ann', friends: [] },
 *    ]
 * 
 * 
 * 
 */
let user = [
      { id: 3, name: 'Mary', friends: ['Jay', 'Jack', 'Bobby'] },
       { id: 1, name: 'John', friends: ['Mark', 'Dany'] },
       { id: 4, name: 'Illay', friends: ['Jay', 'Dany'] },
       { id: 2, name: 'Ann', friends: [] },
     ];


const sortUsersByFriendsQuantity = (users) => {
 
  return users.sort((a, b) => a.friends.length < b.friends.length ? 1 : -1);
 
};

console.log(sortUsersByFriendsQuantity(user));
