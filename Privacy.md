# Privacy

 * "If I can read your newspaper from orbit, what is public? If I can tell where you are in your house by imaging through the wall, what is public?" (Dan Geer)
 * The digital age and the internet take away the natural right to be forgotten. You are no longer able to fully reinvent yourself.
 * "Since 1851, Amsterdam had a registry that recorded the following innocent pieces of data about the residents: name, date of birth, address, marital status, parents, profession, religion, previous addresses and date of death if deceased. [...] What we do know is that [a] little field caused untold thousands of people to die once the occupiers decided to use it to locate Jewish people." (Jacques Mattheij)
 * "Arguing that you don't care about the right to privacy because you have nothing to hide is no different than saying you don't care about free speech because you have nothing to say." (Edward Snowden)
 * Mass surveillance can be used against journalists, whistleblowers and human rights activists. So even if you think that 'if you have nothing to hide, you have nothing to fear', people who represent your political beliefs *may* have something to fear.

## Technology

 * Privacy-preserving contact discovery remains an unsolved problem in practice. You can't hash contact identifiers before transmitting them because the space of pre-hash identifiers is usually too small, especially for phone numbers. Furthermore, you can't salt the identifiers. One might use bloom filters but this does not work for large lists of possible contacts. (Moxie Marlinspike)

### Web browser

 * Disable the HTTP "referer" in your web browser. In Firefox, type `about:config` in the address bar and set `network.http.sendRefererHeader` to `0` to do so.
 * Block trackers, analytics services etc. You can do this by installing the free [uBlock Origin](https://github.com/gorhill/uBlock) extension in your web browser.
 * Block all *third-party* cookies, i.e. cookies which are served from sites other than the one you're currently visiting. In Firefox, go to `Settings`, open the `Privacy` tab and go to section `History`. Define that Firefox will `use custom settings for history` and uncheck `Accept third-party cookies`.
