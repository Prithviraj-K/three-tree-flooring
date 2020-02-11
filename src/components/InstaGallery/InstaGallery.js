import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const InstaGallery = () => {
    return (
        <div>
            <Typography variant="h3">
                Latest
            </Typography>
            <Grid 
                container 
                spacing={1}
                alignItems="center"
                justify="center"
                style={{marginTop: "2em", width: "100%"}}
            >
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
                </Grid>
            </Grid>

        </div>
    );
}

export default InstaGallery;