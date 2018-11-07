package finlab;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class RequestFilter implements Filter {

    private static final Logger log = LoggerFactory.getLogger(RequestFilter.class);

    private ServletContext servletContext;
    /**
     * Constructor
     */
    public RequestFilter() {
        log.debug("create Filter");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        String requestUri = httpRequest.getRequestURI();
        String httpMethod = httpRequest.getMethod();

        log.debug("doFilter({} {})", httpMethod, requestUri);

        try {
            // Nemam pristup k suborom ktore su v JAR preto povolim vsetky requesty ktore koncia .html, .js, .css
            if (requestUri.endsWith(".js") || requestUri.endsWith(".html") || requestUri.endsWith(".css") || requestUri.startsWith("/finlab/api")
                    || requestUri.equals("/finlab/") || this.servletContext.getResource(requestUri) != null || requestUri.endsWith(".png")
            ) {
                chain.doFilter(request, response);
            } else {
                httpRequest.getRequestDispatcher("/").forward(request, response);
            }

            log.debug("doFilter({} {}) response: {}", httpMethod, requestUri, httpResponse.getStatus());

        } catch (IOException | ServletException e) {
            log.warn("doFilter({} {}) response: {}", httpMethod, requestUri, httpResponse.getStatus());
            throw e;
        }
    }

    @Override
    public void init(FilterConfig cfg) throws ServletException {
        log.info("RequestFilter initialized");
        this.servletContext = cfg.getServletContext();
    }

    @Override
    public void destroy() {
        log.info("RequestFilter destroyed");
        this.servletContext = null;
    }
}
