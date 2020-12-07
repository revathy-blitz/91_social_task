const Health = (res) => (<div>{res}</div>);

Health.getInitialProps = async (ctx) => {
    ctx.res.statusCode = 200;
    ctx.res.setHeader('Content-Type', 'application/json');
    ctx.res.end(JSON.stringify({ 'status': 'success', 'message': { 'app_status': 'healthy' } }));
    return { res: ctx.res };
};

export default Health;
