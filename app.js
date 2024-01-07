


const _ = require('lodash');



const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);


const d = {
	'lol': 'hello',
	'lol2': 'bye'


}

for(const e in d){
	console.log(e);
}
