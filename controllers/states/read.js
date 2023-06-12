let read = (req,res,next)=>res.status(200).render('index',{
    title: '/STATUS',
    subtitle: 'endpoints of status'
})

export default read