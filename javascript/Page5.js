let apiBlogApi = new TempApi.BlogApi();import TempApi from '../src/index';let blog = new TempApi.Blog();document.getElementById('ieeky').onclick = () => {blog['title'] = document.querySelector("[annotationname = 'title']").value;blog['stext'] = document.querySelector("[annotationname = 'stext']").value;apiBlogApi.createblog( blog, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { location.href= '/Page4/'+response.body.query._id+'';}}});};