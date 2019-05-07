/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { youtubeSearch, viewCountByVideo } from '../youtube-api';
import 'babel-polyfill';

const { expect } = require('chai');

describe('Get video tests', () => {
	it('Get a list of videos', () => {
		return youtubeSearch('vines to watch in class')
		.then((response) => {
			// expect an object back
			expect(typeof response).to.equal('object');
			response.forEach((data) => {
				expect(data.kind).to.equal('youtube#searchResult');
			    });
			expect(response.length).to.equal(5);
		    });
	    });
    });

it('Get view count of video', () => {
	return viewCountByVideo('TqtLNpkerfo')
	.then((response) => {
		expect(response).to.be.a('Number');
	    });
    });
