package main.java.beans;

import main.java.dao.GenericDao;
import main.java.entities.UserEntity;

import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Stateless
@Path("login")
public class AuthBean {
    /*@EJB*/
    private GenericDao<UserEntity, String> userService = new GenericDao<UserEntity, String>(UserEntity.class);

/*
    @Path("login")
*/
    @GET
    @Produces(MediaType.TEXT_PLAIN)
//    @Consumes(MediaType.APPLICATION_JSON)
    /*@FormParam("login") String login,*/ /*@FormParam("password") String password*//*, @Context HttpServletResponse resp, @Context HttpServletRequest req*/
    public String loginUser() {
        return "<h2>Hello, just Logged in ur momma</h2>";
//        return Response.status(Response.Status.OK).entity("Logged in ur momma.").type(MediaType.TEXT_HTML).build();
        /*UserEntity usr = userService.findById(login);
        if (usr == null) {
            return Response.status(Response.Status.UNAUTHORIZED).entity("User doesn't exist.").build();
        }
        if (usr.getPassword() != password.hashCode()) {
            return Response.status(Response.Status.FORBIDDEN).entity("Incorrect password.").build();
        }
        //req.getSession().setAttribute("login", login);
        Cookie cookie = new Cookie("login", login);
        cookie.setPath("/Lab4-war5");
        resp.addCookie(cookie);
        return Response.status(Response.Status.OK).entity("Logged in.").build();*/
    }

    /*@Path("logout")
    @GET
    public Response logoutUser(@Context HttpServletResponse resp, @Context HttpServletRequest req) {
        //req.getSession().invalidate();
        Cookie cookie = new Cookie("login", "");
        cookie.setMaxAge(0);
        cookie.setPath("/Lab4-war5");
        resp.addCookie(cookie);
        return Response.status(Response.Status.OK).entity("Logged out.").build();
    }

    private boolean checkUser(String login, String password) {
        if (login == null || login.equals("") || login.length() > 15) {
            return false;
        }
        return !(password == null || password.equals("") || password.length() > 15);
    }*/
}
