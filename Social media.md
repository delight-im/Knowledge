# Social Media

 * Apart from SixDegrees.com, which lasted from 1997 to 2001 only, Friendster, which was founded in 2002, is considered one of the original social networks. It was copied by MySpace (2003) due to the high user engagement and great potential for ad sales. MySpace, then again, while acquired for $580m by News Corporation in 2005, was overtaken by and ultimately lost to Facebook (2004) around 2009.

## Instagram

### Downloading photos and videos

```javascript
// Browser bookmarklet (minified):

javascript:!function(){var a=window._sharedData.entry_data.PostPage[0].media,b=a.video_url||a.display_src,c=a.id,d=a.owner.username,e=a.owner.id,f=document.createElement("a");f.href=b,f.download=d+"_-_"+e+"_-_"+c+".jpg",f.innerHTML="",f.style.display="none",document.body.appendChild(f),f.click()}();

// or

// Original JavaScript function:

(function () {
	var data = window._sharedData.entry_data.PostPage[0].media;
	var mediaUrl = data.video_url || data.display_src;
	var mediaId = data.id;
	var ownerName = data.owner.username;
	var ownerId = data.owner.id;

	var downloadLink = document.createElement("a");
	downloadLink.href = mediaUrl;
	downloadLink.download = ownerName + "_-_" + ownerId + "_-_" + mediaId + ".jpg";
	downloadLink.innerHTML = "";
	downloadLink.style.display = "none";

	document.body.appendChild(downloadLink);

	downloadLink.click();
})();
```
