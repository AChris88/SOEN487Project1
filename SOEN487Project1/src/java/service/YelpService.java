/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import api.YelpAPI;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 * REST Web Service
 *
 * @author Felicia
 */
@Path("yelp")
public class YelpService {

    private static final String DEFAULT_TERM = "dinner";
    private static final String DEFAULT_LOCATION = "Montreal, QC";

    /*
     * Update OAuth credentials below from the Yelp Developers API site:
     * http://www.yelp.com/developers/getting_started/api_access
     */
    private static final String CONSUMER_KEY = "EwZPJiG1oUhwlBBdgWDZNw";
    private static final String CONSUMER_SECRET = "TmaI8yKkeRNgWiQThHZPTChL_gg";
    private static final String TOKEN = "e_kIcx1pkyD02pbFnPKMoUY9b1xv31qT";
    private static final String TOKEN_SECRET = "sgoHA8Qc3D2Eq3C1zMf4fdpmblY";

    private final YelpAPI yelpAPI;

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of YelpService
     */
    public YelpService() {
        yelpAPI = new YelpAPI(CONSUMER_KEY, CONSUMER_SECRET, TOKEN, TOKEN_SECRET);
    }

    /**
     * Retrieves representation of an instance of service.YelpService
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getByLocation() {
        String businesses = "";
        try {
            String results = yelpAPI.searchForBusinessesByLocation(DEFAULT_TERM, DEFAULT_LOCATION, 20);
            JSONObject obj = (JSONObject) new JSONParser().parse(results);
            businesses = obj.get("businesses").toString();
        } catch (ParseException ex) {
            Logger.getLogger(YelpService.class.getName()).log(Level.SEVERE, null, ex);
        }
        return businesses;
    }

    /**
     * PUT method for updating or creating an instance of YelpService
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putText(String content) {
    }

}
