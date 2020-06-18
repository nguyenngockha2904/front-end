const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium aut officiis quam? Praesentium a labore corporis libero saepe? Quaerat unde odio rem praesentium aut debitis fugiat. Blanditiis, libero quidem?",
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium aut officiis quam? Praesentium a labore corporis libero saepe? Quaerat unde odio rem praesentium aut debitis fugiat. Blanditiis, libero quidem?",
    },
    {
      id: "3",
      title: "a Helix Fossil was found ",
      body:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium aut officiis quam? Praesentium a labore corporis libero saepe? Quaerat unde odio rem praesentium aut debitis fugiat. Blanditiis, libero quidem?",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  //   console.log(action);
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
