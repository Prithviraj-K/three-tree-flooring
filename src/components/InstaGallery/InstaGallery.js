import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import Flexbox from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';

const InstaGallery = () => {
    return (
        <Fade bottom>
            <div>
                <Typography variant="h4" align="center" style={{ marginBottom: "1em" }}>
                    Latest From Us
                </Typography>
                <div style={{ width: "100%" }}>
                    <Flexbox
                        alignItems="center"
                        justifyContent="center"
                        display='flex'
                        flexWrap='wrap'
                        flexDirection="row"
                        mx="auto"
                        bgcolor="white"
                        style={{ paddingBottom: "2em" }}
                    >
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/B7q-v5VgqhT/'
                                maxWidth={320}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/B7bD-uSAKn6/'
                                maxWidth={320}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/B1XmnH6gduE/'
                                maxWidth={320}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/BzgGmGBAqZb/'
                                maxWidth={320}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/By8G6EgAQyh/'
                                maxWidth={500}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/BqN4rXEgp4o/'
                                maxWidth={500}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/Bp5DDZ4AtXK/'
                                maxWidth={500}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/BoZs6B2grlf/'
                                maxWidth={500}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/Bi5joPblNsc/'
                                maxWidth={500}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        <Flexbox p={1}>
                            <InstagramEmbed
                                url='https://www.instagram.com/p/BigPnGfF5Gl/'
                                maxWidth={500}
                                hideCaption={true}
                                containerTagName='div'
                                protocol=''
                                injectScript
                                onLoading={() => { }}
                                onSuccess={() => { }}
                                onAfterRender={() => { }}
                                onFailure={() => { }}
                            />
                        </Flexbox>
                        
                    </Flexbox>
                </div>
            </div>
        </Fade>
    );
}

export default InstaGallery;