export const title = 'Advertisements';

export const getAdvert = (title, description) => {
	return `
	<div class="advert">
		<div className="title">${title}</div>	
		<div className="description">${description}</div>
	</div>	
	`;
};