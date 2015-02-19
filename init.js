var
  path = require('path'),
  fs = require('fs');

var
  src = 'generator-jhipster-master/app/templates',
  dest = 'templates';


main();

function main() {
	var resourceDir = 'src/main/resources/';
	var javaDir = 'src/main/java/';
	var packageFolder = 'package';
	var webappDir = 'src/main/webapp/';

    // Create application
    copy(src, '_package.json', 'package.json');
    copy(src, '_bower.json', 'bower.json');
    copy(src, '_README.md', 'README.md');
    copy(src, 'bowerrc', '.bowerrc');
    copy(src, 'gitignore', '.gitignore');
    copy(src, 'gitattributes', '.gitattributes');

//  switch (this.frontendBuilder) {
//      case 'gulp':
            copy(src, 'gulpfile.js', 'gulpfile.js');
//          break;
//      case 'grunt':
//      default:
            copy(src, 'Gruntfile.js', 'Gruntfile.js');
//  }

//  switch (this.buildTool) {
//      case 'gradle':
            copy(src, '_build.gradle', 'build.gradle');
            copy(src, '_gradle.properties', 'gradle.properties');
            copy(src, '_yeoman.gradle', 'yeoman.gradle');
            copy(src, '_profile_dev.gradle', 'profile_dev.gradle');
            copy(src, '_profile_prod.gradle', 'profile_prod.gradle');
//    //  if (this.databaseType == "sql") {
            copy(src, '_liquibase.gradle', 'liquibase.gradle');
//    //  }
            copy(src, 'gradlew', 'gradlew');
            copy(src, 'gradlew.bat', 'gradlew.bat');
            copy(src, 'gradle/wrapper/gradle-wrapper.jar', 'gradle/wrapper/gradle-wrapper.jar');
            copy(src, 'gradle/wrapper/gradle-wrapper.properties', 'gradle/wrapper/gradle-wrapper.properties');
//          break;
//      case 'maven':
//      default :
            copy(src, '_pom.xml', 'pom.xml');
////  }

    // Create Java resource files
//  this.mkdir(resourceDir);
    copy(src, resourceDir + '/banner.txt', resourceDir + '/banner.txt');

////  if (this.hibernateCache == "ehcache") {
        copy(src, resourceDir + '_ehcache.xml', resourceDir + 'ehcache.xml');
////  }
////  if (this.devDatabaseType == "h2Memory") {
        copy(src, resourceDir + 'h2.server.properties', resourceDir + '.h2.server.properties');
////  }

    // Thymeleaf templates
    copy(src, resourceDir + '/templates/error.html', resourceDir + 'templates/error.html');

    copy(src, resourceDir + '_logback.xml', resourceDir + 'logback.xml');

    copy(src, resourceDir + '/config/_application.yml', resourceDir + 'config/application.yml');
    copy(src, resourceDir + '/config/_application-dev.yml', resourceDir + 'config/application-dev.yml');
    copy(src, resourceDir + '/config/_application-prod.yml', resourceDir + 'config/application-prod.yml');

////  if (this.databaseType == "sql") {
        copy(src, resourceDir + '/config/liquibase/changelog/_initial_schema.xml', resourceDir + 'config/liquibase/changelog/00000000000000_initial_schema.xml');
        copy(src, resourceDir + '/config/liquibase/master.xml', resourceDir + 'config/liquibase/master.xml');
        copy(src, resourceDir + '/config/liquibase/users.csv', resourceDir + 'config/liquibase/users.csv');
        copy(src, resourceDir + '/config/liquibase/authorities.csv', resourceDir + 'config/liquibase/authorities.csv');
        copy(src, resourceDir + '/config/liquibase/users_authorities.csv', resourceDir + 'config/liquibase/users_authorities.csv');
////  }

////  if (this.databaseType == "mongodb") {
        copy(src, resourceDir + '/config/mongeez/authorities.xml', resourceDir + 'config/mongeez/authorities.xml');
        copy(src, resourceDir + '/config/mongeez/master.xml', resourceDir + 'config/mongeez/master.xml');
        copy(src, resourceDir + '/config/mongeez/users.xml', resourceDir + 'config/mongeez/users.xml');
////  }

    // Create mail templates
    copy(src, resourceDir + '/mails/activationEmail.html', resourceDir + 'mails/activationEmail.html');

    // Create Java files
    copy(src, 'src/main/java/package/_Application.java', javaDir + '/Application.java');
    copy(src, 'src/main/java/package/_ApplicationWebXml.java', javaDir + '/ApplicationWebXml.java');

    copy(src, 'src/main/java/package/aop/logging/_LoggingAspect.java', javaDir + 'aop/logging/LoggingAspect.java');

    copy(src, 'src/main/java/package/config/apidoc/_package-info.java', javaDir + 'config/apidoc/package-info.java');
    copy(src, 'src/main/java/package/config/apidoc/_SwaggerConfiguration.java', javaDir + 'config/apidoc/SwaggerConfiguration.java');

    copy(src, 'src/main/java/package/async/_package-info.java', javaDir + 'async/package-info.java');
    copy(src, 'src/main/java/package/async/_ExceptionHandlingAsyncTaskExecutor.java', javaDir + 'async/ExceptionHandlingAsyncTaskExecutor.java');

    copy(src, 'src/main/java/package/config/_package-info.java', javaDir + 'config/package-info.java');
    copy(src, 'src/main/java/package/config/_AsyncConfiguration.java', javaDir + 'config/AsyncConfiguration.java');
    copy(src, 'src/main/java/package/config/_CacheConfiguration.java', javaDir + 'config/CacheConfiguration.java');
    copy(src, 'src/main/java/package/config/_Constants.java', javaDir + 'config/Constants.java');
    copy(src, 'src/main/java/package/config/_CloudDatabaseConfiguration.java', javaDir + 'config/CloudDatabaseConfiguration.java');
//  if (this.databaseType == 'mongodb') {
        copy(src, 'src/main/java/package/config/_CloudMongoDbConfiguration.java', javaDir + 'config/CloudMongoDbConfiguration.java');
//  }
    copy(src, 'src/main/java/package/config/_DatabaseConfiguration.java', javaDir + 'config/DatabaseConfiguration.java');
    copy(src, 'src/main/java/package/config/_JacksonConfiguration.java', javaDir + 'config/JacksonConfiguration.java');
    copy(src, 'src/main/java/package/config/_LocaleConfiguration.java', javaDir + 'config/LocaleConfiguration.java');
    copy(src, 'src/main/java/package/config/_LoggingAspectConfiguration.java', javaDir + 'config/LoggingAspectConfiguration.java');
    copy(src, 'src/main/java/package/config/_MailConfiguration.java', javaDir + 'config/MailConfiguration.java');
    copy(src, 'src/main/java/package/config/_MetricsConfiguration.java', javaDir + 'config/MetricsConfiguration.java');

//  if (this.authenticationType == 'oauth2') {
        copy(src, 'src/main/java/package/config/_OAuth2ServerConfiguration.java', javaDir + 'config/OAuth2ServerConfiguration.java');
//  }

//  if (this.authenticationType == 'xauth') {
      copy(src, 'src/main/java/package/config/_XAuthConfiguration.java', javaDir + 'config/XAuthConfiguration.java');
//  }

//  if (this.databaseType == 'mongodb' &&  this.authenticationType == 'oauth2') {
        copy(src, 'src/main/java/package/config/oauth2/_OAuth2AuthenticationReadConverter.java', javaDir + 'config/oauth2/OAuth2AuthenticationReadConverter.java');
        copy(src, 'src/main/java/package/config/oauth2/_MongoDBTokenStore.java', javaDir + 'config/oauth2/MongoDBTokenStore.java');
        copy(src, 'src/main/java/package/domain/_OAuth2AuthenticationAccessToken.java', javaDir + 'domain/OAuth2AuthenticationAccessToken.java');
        copy(src, 'src/main/java/package/domain/_OAuth2AuthenticationRefreshToken.java', javaDir + 'domain/OAuth2AuthenticationRefreshToken.java');
        copy(src, 'src/main/java/package/repository/_OAuth2AccessTokenRepository.java', javaDir + 'repository/OAuth2AccessTokenRepository.java');
        copy(src, 'src/main/java/package/repository/_OAuth2RefreshTokenRepository.java', javaDir + 'repository/OAuth2RefreshTokenRepository.java');
//  }

    copy(src, 'src/main/java/package/config/_SecurityConfiguration.java', javaDir + 'config/SecurityConfiguration.java');
    copy(src, 'src/main/java/package/config/_ThymeleafConfiguration.java', javaDir + 'config/ThymeleafConfiguration.java');
    copy(src, 'src/main/java/package/config/_WebConfigurer.java', javaDir + 'config/WebConfigurer.java');
//  if (this.websocket == 'spring-websocket') {
        copy(src, 'src/main/java/package/config/_WebsocketConfiguration.java', javaDir + 'config/WebsocketConfiguration.java');
//  }

    copy(src, 'src/main/java/package/config/audit/_package-info.java', javaDir + 'config/audit/package-info.java');
    copy(src, 'src/main/java/package/config/audit/_AuditEventConverter.java', javaDir + 'config/audit/AuditEventConverter.java');

    copy(src, 'src/main/java/package/config/locale/_package-info.java', javaDir + 'config/locale/package-info.java');
    copy(src, 'src/main/java/package/config/locale/_AngularCookieLocaleResolver.java', javaDir + 'config/locale/AngularCookieLocaleResolver.java');

    copy(src, 'src/main/java/package/config/metrics/_package-info.java', javaDir + 'config/metrics/package-info.java');
    copy(src, 'src/main/java/package/config/metrics/_DatabaseHealthIndicator.java', javaDir + 'config/metrics/DatabaseHealthIndicator.java');
    copy(src, 'src/main/java/package/config/metrics/_JavaMailHealthIndicator.java', javaDir + 'config/metrics/JavaMailHealthIndicator.java');
    copy(src, 'src/main/java/package/config/metrics/_JHipsterHealthIndicatorConfiguration.java', javaDir + 'config/metrics/JHipsterHealthIndicatorConfiguration.java');

//  if (this.hibernateCache == "hazelcast") {
        copy(src, 'src/main/java/package/config/hazelcast/_HazelcastCacheRegionFactory.java', javaDir + 'config/hazelcast/HazelcastCacheRegionFactory.java');
        copy(src, 'src/main/java/package/config/hazelcast/_package-info.java', javaDir + 'config/hazelcast/package-info.java');
//  }

    copy(src, 'src/main/java/package/domain/_package-info.java', javaDir + 'domain/package-info.java');
    copy(src, 'src/main/java/package/domain/_AbstractAuditingEntity.java', javaDir + 'domain/AbstractAuditingEntity.java');
    copy(src, 'src/main/java/package/domain/_Authority.java', javaDir + 'domain/Authority.java');
    copy(src, 'src/main/java/package/domain/_PersistentAuditEvent.java', javaDir + 'domain/PersistentAuditEvent.java');
//  if (this.authenticationType == 'session') {
        copy(src, 'src/main/java/package/domain/_PersistentToken.java', javaDir + 'domain/PersistentToken.java');
//  }
    copy(src, 'src/main/java/package/domain/_User.java', javaDir + 'domain/User.java');
    copy(src, 'src/main/java/package/domain/util/_CustomLocalDateSerializer.java', javaDir + 'domain/util/CustomLocalDateSerializer.java');
    copy(src, 'src/main/java/package/domain/util/_CustomDateTimeSerializer.java', javaDir + 'domain/util/CustomDateTimeSerializer.java');
    copy(src, 'src/main/java/package/domain/util/_CustomDateTimeDeserializer.java', javaDir + 'domain/util/CustomDateTimeDeserializer.java');
    copy(src, 'src/main/java/package/domain/util/_ISO8601LocalDateDeserializer.java', javaDir + 'domain/util/ISO8601LocalDateDeserializer.java');

    copy(src, 'src/main/java/package/repository/_package-info.java', javaDir + 'repository/package-info.java');
    copy(src, 'src/main/java/package/repository/_AuthorityRepository.java', javaDir + 'repository/AuthorityRepository.java');
    copy(src, 'src/main/java/package/repository/_CustomAuditEventRepository.java', javaDir + 'repository/CustomAuditEventRepository.java');

    copy(src, 'src/main/java/package/repository/_UserRepository.java', javaDir + 'repository/UserRepository.java');

//  if (this.authenticationType == 'session') {
        copy(src, 'src/main/java/package/repository/_PersistentTokenRepository.java', javaDir + 'repository/PersistentTokenRepository.java');
//  }
    copy(src, 'src/main/java/package/repository/_PersistenceAuditEventRepository.java', javaDir + 'repository/PersistenceAuditEventRepository.java');

    copy(src, 'src/main/java/package/security/_package-info.java', javaDir + 'security/package-info.java');
    copy(src, 'src/main/java/package/security/_AjaxAuthenticationFailureHandler.java', javaDir + 'security/AjaxAuthenticationFailureHandler.java');
    copy(src, 'src/main/java/package/security/_AjaxAuthenticationSuccessHandler.java', javaDir + 'security/AjaxAuthenticationSuccessHandler.java');
//  if (this.authenticationType == 'session' || this.authenticationType == 'oauth2') {
        copy(src, 'src/main/java/package/security/_AjaxLogoutSuccessHandler.java', javaDir + 'security/AjaxLogoutSuccessHandler.java');
//  }
//  if (this.authenticationType == 'xauth'){
        copy(src, 'src/main/java/package/security/_AuthenticationProvider.java', javaDir + 'security/AuthenticationProvider.java');
//  }
    copy(src, 'src/main/java/package/security/_AuthoritiesConstants.java', javaDir + 'security/AuthoritiesConstants.java');
//  if (this.authenticationType == 'session') {
        copy(src, 'src/main/java/package/security/_CustomPersistentRememberMeServices.java', javaDir + 'security/CustomPersistentRememberMeServices.java');
//  }
    copy(src, 'src/main/java/package/security/_Http401UnauthorizedEntryPoint.java', javaDir + 'security/Http401UnauthorizedEntryPoint.java');
    copy(src, 'src/main/java/package/security/_SecurityUtils.java', javaDir + 'security/SecurityUtils.java');
    copy(src, 'src/main/java/package/security/_SpringSecurityAuditorAware.java', javaDir + 'security/SpringSecurityAuditorAware.java');
    copy(src, 'src/main/java/package/security/_UserDetailsService.java', javaDir + 'security/UserDetailsService.java');
    copy(src, 'src/main/java/package/security/_UserNotActivatedException.java', javaDir + 'security/UserNotActivatedException.java');

//  if (this.authenticationType == 'xauth'){
      copy(src, 'src/main/java/package/security/xauth/_Token.java', javaDir + 'security/xauth/Token.java');
      copy(src, 'src/main/java/package/security/xauth/_TokenProvider.java', javaDir + 'security/xauth/TokenProvider.java');
      copy(src, 'src/main/java/package/web/rest/_UserXAuthTokenController.java', javaDir + 'web/rest/UserXAuthTokenController.java');
      copy(src, 'src/main/java/package/security/xauth/_XAuthTokenConfigurer.java', javaDir + 'security/xauth/XAuthTokenConfigurer.java');
      copy(src, 'src/main/java/package/security/xauth/_XAuthTokenFilter.java', javaDir + 'security/xauth/XAuthTokenFilter.java');
//  }

    copy(src, 'src/main/java/package/service/_package-info.java', javaDir + 'service/package-info.java');
    copy(src, 'src/main/java/package/service/_AuditEventService.java', javaDir + 'service/AuditEventService.java');
    copy(src, 'src/main/java/package/service/_UserService.java', javaDir + 'service/UserService.java');
    copy(src, 'src/main/java/package/service/_MailService.java', javaDir + 'service/MailService.java');
    copy(src, 'src/main/java/package/service/util/_RandomUtil.java', javaDir + 'service/util/RandomUtil.java');

    copy(src, 'src/main/java/package/web/filter/_package-info.java', javaDir + 'web/filter/package-info.java');
    copy(src, 'src/main/java/package/web/filter/_CachingHttpHeadersFilter.java', javaDir + 'web/filter/CachingHttpHeadersFilter.java');
    copy(src, 'src/main/java/package/web/filter/_StaticResourcesProductionFilter.java', javaDir + 'web/filter/StaticResourcesProductionFilter.java');
//  if (this.authenticationType == 'session') {
        copy(src, 'src/main/java/package/web/filter/_CsrfCookieGeneratorFilter.java', javaDir + 'web/filter/CsrfCookieGeneratorFilter.java');
//  }

    copy(src, 'src/main/java/package/web/filter/gzip/_package-info.java', javaDir + 'web/filter/gzip/package-info.java');
    copy(src, 'src/main/java/package/web/filter/gzip/_GzipResponseHeadersNotModifiableException.java', javaDir + 'web/filter/gzip/GzipResponseHeadersNotModifiableException.java');
    copy(src, 'src/main/java/package/web/filter/gzip/_GZipResponseUtil.java', javaDir + 'web/filter/gzip/GZipResponseUtil.java');
    copy(src, 'src/main/java/package/web/filter/gzip/_GZipServletFilter.java', javaDir + 'web/filter/gzip/GZipServletFilter.java');
    copy(src, 'src/main/java/package/web/filter/gzip/_GZipServletOutputStream.java', javaDir + 'web/filter/gzip/GZipServletOutputStream.java');
    copy(src, 'src/main/java/package/web/filter/gzip/_GZipServletResponseWrapper.java', javaDir + 'web/filter/gzip/GZipServletResponseWrapper.java');

    copy(src, 'src/main/java/package/web/propertyeditors/_package-info.java', javaDir + 'web/propertyeditors/package-info.java');
    copy(src, 'src/main/java/package/web/propertyeditors/_LocaleDateTimeEditor.java', javaDir + 'web/propertyeditors/LocaleDateTimeEditor.java');

    copy(src, 'src/main/java/package/web/rest/dto/_package-info.java', javaDir + 'web/rest/dto/package-info.java');
    copy(src, 'src/main/java/package/web/rest/dto/_LoggerDTO.java', javaDir + 'web/rest/dto/LoggerDTO.java');
    copy(src, 'src/main/java/package/web/rest/dto/_UserDTO.java', javaDir + 'web/rest/dto/UserDTO.java');
    copy(src, 'src/main/java/package/web/rest/_package-info.java', javaDir + 'web/rest/package-info.java');
    copy(src, 'src/main/java/package/web/rest/_AccountResource.java', javaDir + 'web/rest/AccountResource.java');
    copy(src, 'src/main/java/package/web/rest/_AuditResource.java', javaDir + 'web/rest/AuditResource.java');
    copy(src, 'src/main/java/package/web/rest/_LogsResource.java', javaDir + 'web/rest/LogsResource.java');
    copy(src, 'src/main/java/package/web/rest/_UserResource.java', javaDir + 'web/rest/UserResource.java');

//  if (this.websocket == 'spring-websocket') {
        copy(src, 'src/main/java/package/web/websocket/_package-info.java', javaDir + 'web/websocket/package-info.java');
        copy(src, 'src/main/java/package/web/websocket/_ActivityService.java', javaDir + 'web/websocket/ActivityService.java');
        copy(src, 'src/main/java/package/web/websocket/dto/_package-info.java', javaDir + 'web/websocket/dto/package-info.java');
        copy(src, 'src/main/java/package/web/websocket/dto/_ActivityDTO.java', javaDir + 'web/websocket/dto/ActivityDTO.java');
//  }

    // Create Test Java files
    var testDir = 'src/test/java/' + packageFolder + '/';
    var testResourceDir = 'src/test/resources/';
//  this.mkdir(testDir);

//  if (this.databaseType == "mongodb") {
        copy(src, 'src/test/java/package/config/_MongoConfiguration.java', testDir + 'config/MongoConfiguration.java');
//  }
    copy(src, 'src/test/java/package/security/_SecurityUtilsTest.java', testDir + 'security/SecurityUtilsTest.java');
    copy(src, 'src/test/java/package/service/_UserServiceTest.java', testDir + 'service/UserServiceTest.java');
    copy(src, 'src/test/java/package/web/rest/_AccountResourceTest.java', testDir + 'web/rest/AccountResourceTest.java');
    copy(src, 'src/test/java/package/web/rest/_TestUtil.java', testDir + 'web/rest/TestUtil.java');
    copy(src, 'src/test/java/package/web/rest/_UserResourceTest.java', testDir + 'web/rest/UserResourceTest.java');

    copy(src, testResourceDir + 'config/_application.yml', testResourceDir + 'config/application.yml');
    copy(src, testResourceDir + '_logback-test.xml', testResourceDir + 'logback-test.xml');

//  if (this.hibernateCache == "ehcache") {
        copy(src, testResourceDir + '_ehcache.xml', testResourceDir + 'ehcache.xml');
//  }

    // Create Webapp
//  this.mkdir(webappDir);

    // normal CSS or SCSS?
//  if (this.useCompass) {
        copy(src, 'src/main/scss/main.scss', 'src/main/scss/main.scss');
//  } else {
        copy(src, 'src/main/webapp/assets/styles/main.css', 'src/main/webapp/assets/styles/main.css');
//  }

    // HTML5 BoilerPlate
    copy(src, webappDir + 'favicon.ico', webappDir + 'favicon.ico');
    copy(src, webappDir + 'robots.txt', webappDir + 'robots.txt');
    copy(src, webappDir + 'htaccess.txt', webappDir + '.htaccess');

    // install all files related to i18n
//    this.installI18nFilesByLanguage(this, webappDir, resourceDir, 'en');
//    this.installI18nFilesByLanguage(this, webappDir, resourceDir, 'fr');

    // Swagger-ui for Jhipster
    copy(src, webappDir + '/swagger-ui/_index.html', webappDir + 'swagger-ui/index.html');
    copy(src, webappDir + '/swagger-ui/images/throbber.gif', webappDir + 'swagger-ui/images/throbber.gif');

    // Angular JS views

    copy(src, webappDir + '/scripts/app/_app.js', webappDir + 'scripts/app/app.js');
    // Client Components
    copy(src, webappDir + '/scripts/components/admin/_audits.service.js', webappDir + 'scripts/components/admin/audits.service.js');
    copy(src, webappDir + '/scripts/components/admin/_configuration.service.js', webappDir + 'scripts/components/admin/configuration.service.js');
    copy(src, webappDir + '/scripts/components/admin/_logs.service.js', webappDir + 'scripts/components/admin/logs.service.js');
    copy(src, webappDir + '/scripts/components/admin/_monitoring.service.js', webappDir + 'scripts/components/admin/monitoring.service.js');
    copy(src, webappDir + '/scripts/components/auth/_auth.service.js', webappDir + 'scripts/components/auth/auth.service.js');
    copy(src, webappDir + '/scripts/components/auth/_principal.service.js', webappDir + 'scripts/components/auth/principal.service.js');
//  if (this.authenticationType == 'oauth2') {
        copy(src, webappDir + '/scripts/components/auth/provider/_auth.oauth2.service.js', webappDir + 'scripts/components/auth/provider/auth.oauth2.service.js');
//  } else if (this.authenticationType == 'xauth') {
        copy(src, webappDir + '/scripts/components/auth/provider/_auth.xauth.service.js', webappDir + 'scripts/components/auth/provider/auth.xauth.service.js');
//  } else {
        copy(src, webappDir + '/scripts/components/auth/provider/_auth.session.service.js', webappDir + 'scripts/components/auth/provider/auth.session.service.js');
//  }
    copy(src, webappDir + '/scripts/components/auth/services/_account.service.js', webappDir + 'scripts/components/auth/services/account.service.js');
    copy(src, webappDir + '/scripts/components/auth/services/_activate.service.js', webappDir + 'scripts/components/auth/services/activate.service.js');
    copy(src, webappDir + '/scripts/components/auth/services/_password.service.js', webappDir + 'scripts/components/auth/services/password.service.js');
    copy(src, webappDir + '/scripts/components/auth/services/_register.service.js', webappDir + 'scripts/components/auth/services/register.service.js');
//  if (this.authenticationType == 'session') {
        copy(src, webappDir + '/scripts/components/auth/services/_sessions.service.js', webappDir + 'scripts/components/auth/services/sessions.service.js');
//  }
    copy(src, webappDir + '/scripts/components/form/_form.directive.js', webappDir + 'scripts/components/form/form.directive.js');
    copy(src, webappDir + '/scripts/components/language/_language.controller.js', webappDir + 'scripts/components/language/language.controller.js');
    copy(src, webappDir + '/scripts/components/language/_language.service.js', webappDir + 'scripts/components/language/language.service.js');
    copy(src, webappDir + '/scripts/components/navbar/_navbar.directive.js', webappDir + 'scripts/components/navbar/navbar.directive.js');
    copy(src, webappDir + '/scripts/components/navbar/navbar.html', webappDir + 'scripts/components/navbar/navbar.html');
    copy(src, webappDir + '/scripts/components/navbar/_navbar.controller.js', webappDir + 'scripts/components/navbar/navbar.controller.js');
    copy(src, webappDir + '/scripts/components/util/_base64.service.js', webappDir + 'scripts/components/util/base64.service.js');
    copy(src, webappDir + '/scripts/components/util/_truncate.filter.js', webappDir + 'scripts/components/util/truncate.filter.js');

    // Client App
    copy(src, webappDir + '/scripts/app/account/_account.js', webappDir + 'scripts/app/account/account.js');
    copy(src, webappDir + '/scripts/app/account/activate/activate.html', webappDir + 'scripts/app/account/activate/activate.html');
    copy(src, webappDir + '/scripts/app/account/activate/_activate.js', webappDir + 'scripts/app/account/activate/activate.js');
    copy(src, webappDir + '/scripts/app/account/activate/_activate.controller.js', webappDir + 'scripts/app/account/activate/activate.controller.js');
    copy(src, webappDir + '/scripts/app/account/login/login.html', webappDir + 'scripts/app/account/login/login.html');
    copy(src, webappDir + '/scripts/app/account/login/_login.js', webappDir + 'scripts/app/account/login/login.js');
    copy(src, webappDir + '/scripts/app/account/login/_login.controller.js', webappDir + 'scripts/app/account/login/login.controller.js');
    copy(src, webappDir + '/scripts/app/account/logout/_logout.js', webappDir + 'scripts/app/account/logout/logout.js');
    copy(src, webappDir + '/scripts/app/account/logout/_logout.controller.js', webappDir + 'scripts/app/account/logout/logout.controller.js');
    copy(src, webappDir + '/scripts/app/account/password/password.html', webappDir + 'scripts/app/account/password/password.html');
    copy(src, webappDir + '/scripts/app/account/password/_password.js', webappDir + 'scripts/app/account/password/password.js');
    copy(src, webappDir + '/scripts/app/account/password/_password.controller.js', webappDir + 'scripts/app/account/password/password.controller.js');
    copy(src, webappDir + '/scripts/app/account/password/_password.directive.js', webappDir + 'scripts/app/account/password/password.directive.js');
    copy(src, webappDir + '/scripts/app/account/register/register.html', webappDir + 'scripts/app/account/register/register.html');
    copy(src, webappDir + '/scripts/app/account/register/_register.js', webappDir + 'scripts/app/account/register/register.js');
    copy(src, webappDir + '/scripts/app/account/register/_register.controller.js', webappDir + 'scripts/app/account/register/register.controller.js');
//  if (this.authenticationType == 'session') {
        copy(src, webappDir + '/scripts/app/account/sessions/sessions.html', webappDir + 'scripts/app/account/sessions/sessions.html');
        copy(src, webappDir + '/scripts/app/account/sessions/_sessions.js', webappDir + 'scripts/app/account/sessions/sessions.js');
        copy(src, webappDir + '/scripts/app/account/sessions/_sessions.controller.js', webappDir + 'scripts/app/account/sessions/sessions.controller.js');
//  }
    copy(src, webappDir + '/scripts/app/account/settings/settings.html', webappDir + 'scripts/app/account/settings/settings.html');
    copy(src, webappDir + '/scripts/app/account/settings/_settings.js', webappDir + 'scripts/app/account/settings/settings.js');
    copy(src, webappDir + '/scripts/app/account/settings/_settings.controller.js', webappDir + 'scripts/app/account/settings/settings.controller.js');
    copy(src, webappDir + '/scripts/app/admin/_admin.js', webappDir + 'scripts/app/admin/admin.js');
    copy(src, webappDir + '/scripts/app/admin/audits/audits.html', webappDir + 'scripts/app/admin/audits/audits.html');
    copy(src, webappDir + '/scripts/app/admin/audits/_audits.js', webappDir + 'scripts/app/admin/audits/audits.js');
    copy(src, webappDir + '/scripts/app/admin/audits/_audits.controller.js', webappDir + 'scripts/app/admin/audits/audits.controller.js');
    copy(src, webappDir + '/scripts/app/admin/configuration/configuration.html', webappDir + 'scripts/app/admin/configuration/configuration.html');
    copy(src, webappDir + '/scripts/app/admin/configuration/_configuration.js', webappDir + 'scripts/app/admin/configuration/configuration.js');
    copy(src, webappDir + '/scripts/app/admin/configuration/_configuration.controller.js', webappDir + 'scripts/app/admin/configuration/configuration.controller.js');
    copy(src, webappDir + '/scripts/app/admin/docs/docs.html', webappDir + 'scripts/app/admin/docs/docs.html');
    copy(src, webappDir + '/scripts/app/admin/docs/_docs.js', webappDir + 'scripts/app/admin/docs/docs.js');
    copy(src, webappDir + '/scripts/app/admin/health/health.html', webappDir + 'scripts/app/admin/health/health.html');
    copy(src, webappDir + '/scripts/app/admin/health/_health.js', webappDir + 'scripts/app/admin/health/health.js');
    copy(src, webappDir + '/scripts/app/admin/health/_health.controller.js', webappDir + 'scripts/app/admin/health/health.controller.js');
    copy(src, webappDir + '/scripts/app/admin/logs/logs.html', webappDir + 'scripts/app/admin/logs/logs.html');
    copy(src, webappDir + '/scripts/app/admin/logs/_logs.js', webappDir + 'scripts/app/admin/logs/logs.js');
    copy(src, webappDir + '/scripts/app/admin/logs/_logs.controller.js', webappDir + 'scripts/app/admin/logs/logs.controller.js');
    copy(src, webappDir + '/scripts/app/admin/metrics/_metrics.html', webappDir + 'scripts/app/admin/metrics/metrics.html');
    copy(src, webappDir + '/scripts/app/admin/metrics/_metrics.js', webappDir + 'scripts/app/admin/metrics/metrics.js');
    copy(src, webappDir + '/scripts/app/admin/metrics/_metrics.controller.js', webappDir + 'scripts/app/admin/metrics/metrics.controller.js');
//  if (this.websocket == 'spring-websocket') {
        copy(src, webappDir + '/scripts/app/admin/tracker/tracker.html', webappDir + 'scripts/app/admin/tracker/tracker.html');
        copy(src, webappDir + '/scripts/app/admin/tracker/_tracker.js', webappDir + 'scripts/app/admin/tracker/tracker.js');
        copy(src, webappDir + '/scripts/app/admin/tracker/_tracker.controller.js', webappDir + 'scripts/app/admin/tracker/tracker.controller.js');
        copy(src, webappDir + '/scripts/components/tracker/_tracker.service.js', webappDir + '/scripts/components/tracker/tracker.service.js');
//  }
    copy(src, webappDir + '/scripts/app/error/error.html', webappDir + 'scripts/app/error/error.html');
    copy(src, webappDir + '/scripts/app/error/accessdenied.html', webappDir + 'scripts/app/error/accessdenied.html');
    copy(src, webappDir + '/scripts/app/entities/_entity.js', webappDir + 'scripts/app/entities/entity.js');
    copy(src, webappDir + '/scripts/app/error/_error.js', webappDir + 'scripts/app/error/error.js');
    copy(src, webappDir + '/scripts/app/main/main.html', webappDir + 'scripts/app/main/main.html');
    copy(src, webappDir + '/scripts/app/main/_main.js', webappDir + 'scripts/app/main/main.js');
    copy(src, webappDir + '/scripts/app/main/_main.controller.js', webappDir + 'scripts/app/main/main.controller.js');

    // Index page
    copy(src, webappDir + '_index.html', webappDir + 'index.html');
//    this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), webappDir + '_index.html'));
//    this.indexFile = this.engine(this.indexFile);

    // Create Test Javascript files
    var testJsDir = 'src/test/javascript/';
    copy(src, testJsDir + '_karma.conf.js', testJsDir + 'karma.conf.js');
    copy(src, testJsDir + 'spec/app/account/login/_loginControllerSpec.js', testJsDir + 'spec/app/account/login/loginControllerSpec.js');
    copy(src, testJsDir + 'spec/app/account/password/_passwordControllerSpec.js', testJsDir + 'spec/app/account/password/passwordControllerSpec.js');
    copy(src, testJsDir + 'spec/app/account/password/_passwordDirectiveSpec.js', testJsDir + 'spec/app/account/password/passwordDirectiveSpec.js');
//  if (this.authenticationType == 'session') {
        copy(src, testJsDir + 'spec/app/account/sessions/_sessionsControllerSpec.js', testJsDir + 'spec/app/account/sessions/sessionsControllerSpec.js');
//  }
    copy(src, testJsDir + 'spec/app/account/settings/_settingsControllerSpec.js', testJsDir + 'spec/app/account/settings/settingsControllerSpec.js');
    copy(src, testJsDir + 'spec/components/auth/_authServicesSpec.js', testJsDir + 'spec/components/auth/authServicesSpec.js');

    // CSS
    copy(src, webappDir + 'assets/styles/documentation.css', webappDir + 'assets/styles/documentation.css');

    // Images
    copy(src, webappDir + 'assets/images/development_ribbon.png', webappDir + 'assets/images/development_ribbon.png');
    copy(src, webappDir + 'assets/images/hipster.png', webappDir + 'assets/images/hipster.png');
    copy(src, webappDir + 'assets/images/hipster2x.png', webappDir + 'assets/images/hipster2x.png');

    var appScripts = [
        'scripts/app/app.js',
        'scripts/app/app.constants.js',
        'scripts/components/auth/auth.service.js',
        'scripts/components/auth/principal.service.js',
        'scripts/components/auth/services/account.service.js',
        'scripts/components/auth/services/activate.service.js',
        'scripts/components/auth/services/password.service.js',
        'scripts/components/auth/services/register.service.js',
        'scripts/components/form/form.directive.js',
        'scripts/components/language/language.service.js',
        'scripts/components/language/language.controller.js',
        'scripts/components/admin/audits.service.js',
        'scripts/components/admin/logs.service.js',
        'scripts/components/admin/configuration.service.js',
        'scripts/components/admin/monitoring.service.js',
        'scripts/components/navbar/navbar.directive.js',
        'scripts/components/navbar/navbar.controller.js',
        'scripts/components/util/truncate.filter.js',
        'scripts/components/util/base64.service.js',
        'scripts/app/account/account.js',
        'scripts/app/account/activate/activate.js',
        'scripts/app/account/activate/activate.controller.js',
        'scripts/app/account/login/login.js',
        'scripts/app/account/login/login.controller.js',
        'scripts/app/account/logout/logout.js',
        'scripts/app/account/logout/logout.controller.js',
        'scripts/app/account/password/password.js',
        'scripts/app/account/password/password.controller.js',
        'scripts/app/account/password/password.directive.js',
        'scripts/app/account/register/register.js',
        'scripts/app/account/register/register.controller.js',
        'scripts/app/account/settings/settings.js',
        'scripts/app/account/settings/settings.controller.js',
        'scripts/app/admin/admin.js',
        'scripts/app/admin/audits/audits.js',
        'scripts/app/admin/audits/audits.controller.js',
        'scripts/app/admin/configuration/configuration.js',
        'scripts/app/admin/configuration/configuration.controller.js',
        'scripts/app/admin/docs/docs.js',
        'scripts/app/admin/health/health.js',
        'scripts/app/admin/health/health.controller.js',
        'scripts/app/admin/logs/logs.js',
        'scripts/app/admin/logs/logs.controller.js',
        'scripts/app/admin/metrics/metrics.js',
        'scripts/app/admin/metrics/metrics.controller.js',
        'scripts/app/entities/entity.js',
        'scripts/app/error/error.js',
        'scripts/app/main/main.js',
        'scripts/app/main/main.controller.js'
        ];

//  if (this.authenticationType == 'xauth'){
        appScripts = appScripts.concat([
            'scripts/components/auth/provider/auth.xauth.service.js']);
//  }

//  if (this.authenticationType == 'oauth2') {
        appScripts = appScripts.concat([
            'scripts/components/auth/provider/auth.oauth2.service.js']);
//  }

//  if (this.authenticationType == 'session'){
        appScripts = appScripts.concat([
            'scripts/components/auth/services/sessions.service.js',
            'scripts/components/auth/provider/auth.session.service.js',
            'scripts/app/account/sessions/sessions.js',
            'scripts/app/account/sessions/sessions.controller.js']);
//  }

//  if (this.websocket == 'spring-websocket') {
        appScripts = appScripts.concat([
            'scripts/app/admin/tracker/tracker.js',
            'scripts/app/admin/tracker/tracker.controller.js',
            'scripts/components/tracker/tracker.service.js'])
//  }

//    this.indexFile = this.appendScripts(this.indexFile, 'scripts/app.js', appScripts, {}, ['.tmp', 'src/main/webapp']);
//    this.write(webappDir + 'index.html', this.indexFile);

}

function copy(src, infile, outfile) {
    try {
        var outFile = path.join(__dirname,dest,outfile);
        mkdirp(path.dirname(outFile));
        var inFile = path.join(__dirname,src,infile);
        var data = fs.readFileSync(inFile);
        fs.writeFileSync(outFile, data);
        console.log('=> ', outFile);
    } catch(e) {
        throw e;
    }
}

function mkdirp(dir) {
	if(! fs.existsSync(dir)) {
	    var parentdir = path.dirname(dir);
	    if(! fs.existsSync(parentdir)) {
	        mkdirp(parentdir);
	    }
	    fs.mkdirSync(dir);
	}
}