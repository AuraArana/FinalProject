const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			 inmigration: []
		},
		actions: {
		addInmigration(name, phone, email, address) {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "heidysAgenda"
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/heidysAgenda")
						.then(response => response.json())
						.then(result => {
							setStore({
								inmigration: result
							});
						})
						.catch(e => console.error(e));
				});
			}
		}
	};
};

export default getState;
