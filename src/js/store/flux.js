const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					background2: "white",
					initial: "black"
				},
				{
					title: "SECOND",
					background: "white",
					background2: "white",
					initial: "black"
				}
            ],
            services: [],
            inmigration:[],
            inmigration2:[],
            legal:[]
            legal:[],
            legal2:[]
		},
		actions: {
            // Use getActions to call a function within a fuction
            	getServices: () => {
				fetch(url + "agenda/finolweb")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },
            	getAura2: () => {
				fetch(url + "agenda/aura2")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },
            getJose: () => {
				fetch(url + "agenda/aura2")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },
            getJose2: () => {
				fetch(url + "agenda/aura2")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },
            getAura4: () => {
				fetch(url + "agenda/aura2")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },

            getjose5: () => {
				fetch(url + "agenda/aura2")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },

            getjose6: () => {
				fetch(url + "agenda/aura2")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },
            getjose7: () => {
				fetch(url + "agenda/aura2")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },
            getjose8: () => {
				fetch(url + "agenda/aura2")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },            
            getAura6: () => {
				fetch(url + "agenda/aura2")
					.then(res => res.json())
					.then(response => {
						//console.log(response);
						setStore({ services: response });
					});
            },
            
            
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
