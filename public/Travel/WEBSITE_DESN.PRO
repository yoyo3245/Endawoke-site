PRO WEBSITE_DESN
SITE='AZERBAIJAN' & SITE2='Azerbaijan' & SITE3='Azerbaijan' & MAXL=175
INT=FIX(MAXL/30.0) 
TST=MAXL MOD 30
IF TST EQ 0 THEN NPG=INT $
ELSE IF TST NE 0 THEN NPG=INT+1
 
FOR IN=0L,MAXL,1 DO BEGIN
   IF (IN-1) LT 10 THEN CDYL='00'+STRMID(STRCOMPRESS(round((IN-1))),1,1) $
   ELSE IF (IN-1) GE 10 AND (IN-1) LT 100 THEN CDYL='0'+STRMID(STRCOMPRESS(round((IN-1))),1,2) $
   ELSE IF (IN-1) GE 100 THEN CDYL=STRMID(STRCOMPRESS(round((IN-1))),1,3) 

   IF IN LT 10 THEN CDY='00'+STRMID(STRCOMPRESS(round(IN)),1,1) $
   ELSE IF IN GE 10 AND IN LT 100 THEN CDY='0'+STRMID(STRCOMPRESS(round(IN)),1,2) $
   ELSE IF IN GE 100 THEN CDY=STRMID(STRCOMPRESS(round(IN)),1,3) 

   IF (IN+1) LT 10 THEN CDYU='00'+STRMID(STRCOMPRESS(round((IN+1))),1,1) $
   ELSE IF (IN+1) GE 10 AND (IN+1) LT 100 THEN CDYU='0'+STRMID(STRCOMPRESS(round((IN+1))),1,2) $
   ELSE IF (IN+1) GE 100 THEN CDYU=STRMID(STRCOMPRESS(round((IN+1))),1,3) 
 
CLOSE,2 & OPENW,2,'W:\'+SITE+'\Image'+CDY+'.html'
  PRINTF,2,'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">'
  PRINTF,2,'<html>'
  PRINTF,2,' <head>'
  PRINTF,2,'  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">'
  PRINTF,2,'  <title>'
  PRINTF,2,'  IMAG_'+CDYU+'.JPG'
  PRINTF,2,'  </title>'
  PRINTF,2,' </head>'
  PRINTF,2,' <body bgcolor="#ffffff" text="#000000">'
IF IN GT 0 AND IN LT (MAXL-1) THEN PRINTF,2,'  <br><br><A HREF="Image'+CDYL+'.html"><--Previous</A>&nbsp;&nbsp;<A HREF="../'+SITE+'/'+SITE2+'.html">Up</A>&nbsp;&nbsp;<A HREF="Image'+CDYU+'.html">Next--></A><br><br>'
IF IN EQ 0 THEN PRINTF,2,'  <br><br><A HREF="../'+SITE+'/'+SITE2+'.html">Up</A>&nbsp;&nbsp;<A HREF="Image'+CDYU+'.html">Next--></A><br><br>'
IF IN EQ (MAXL-1) THEN PRINTF,2,'  <br><br><A HREF="Image'+CDYL+'.html"><--Previous</A>&nbsp;&nbsp;<A HREF="../'+SITE+'/'+SITE2+'.html">Up</A><br><br>'
  PRINTF,2,'   '
  PRINTF,2,'  <img height="680" alt="IMAG_'+CDYU+'.JPG" width="820" src="../'+SITE+'/IMAG_'+CDYU+'.jpg">'
  PRINTF,2,' </body>'
  PRINTF,2,'</html>'

CLOSE,2
ENDFOR

FOR NMP=0L,INT,1 DO BEGIN
 IF NMP EQ 0 THEN FNAME=SITE2+'.html' $
 ELSE IF NMP GT 0 THEN FNAME='Page'+STRMID(STRCOMPRESS(round(NMP)),1,1)+'.html'

CLOSE,1 & OPENW,1,'W:\'+SITE+'\'+FNAME ;SITE2+'.html'
PRINTF,1,'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">'
PRINTF,1,'<html>'
PRINTF,1,' <head>'
PRINTF,1,'  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">'
PRINTF,1,'  <title>'
PRINTF,1,'  '+SITE3
PRINTF,1,'  </title>'
PRINTF,1,' </head>'
PRINTF,1,' <body bgcolor="#ffffff" text="#000000">'
PRINTF,1,'  <h2 align="center">'
PRINTF,1,'  '+SITE3
PRINTF,1,'  </h2>'
PRINTF,1,'    '
print,nmp

CASE NMP OF
   0: begin   ;;;ONE MINUTE
      PRINTF,1,'  Page 1'

      FOR NP=1,NPG-1,1 DO BEGIN
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  <a href="Page'+STRMID(STRCOMPRESS(round(NP)),1,1)+'.html">Page '+STRMID(STRCOMPRESS(round((NP+1))),1,1)
        PRINTF,1,'</a>'
      ENDFOR     
     end
   1: begin      ;;ONE SECOND
        PRINTF,1,'   <a href="'+SITE2+'.html">Page 1'
        PRINTF,1,'</a>'
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  Page 2'

      FOR NP=2,NPG-1,1 DO BEGIN
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  <a href="Page'+STRMID(STRCOMPRESS(round(NP)),1,1)+'.html">Page '+STRMID(STRCOMPRESS(round((NP+1))),1,1)
        PRINTF,1,'</a>'
      ENDFOR     
     end
   2: begin      ;;HALF SECOND
        PRINTF,1,'   <a href="'+SITE2+'.html">Page 1'
        PRINTF,1,'</a>'
        PRINTF,1,'  &nbsp;|&nbsp;
        PRINTF,1,'  <a href="Page1.html">Page 2
        PRINTF,1,'</a>
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  Page 3'

      FOR NP=3,NPG-1,1 DO BEGIN
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  <a href="Page'+STRMID(STRCOMPRESS(round(NP)),1,1)+'.html">Page '+STRMID(STRCOMPRESS(round((NP+1))),1,1)
        PRINTF,1,'</a>'
      ENDFOR     
     end
   3: begin      ;;HALF SECOND
        PRINTF,1,'   <a href="'+SITE2+'.html">Page 1'
        PRINTF,1,'</a>'
        PRINTF,1,'  &nbsp;|&nbsp;
        PRINTF,1,'  <a href="Page1.html">Page 2
        PRINTF,1,'</a>
        PRINTF,1,'  <a href="Page2.html">Page 3
        PRINTF,1,'</a>
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  Page 4'

      FOR NP=4,NPG-1,1 DO BEGIN
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  <a href="Page'+STRMID(STRCOMPRESS(round(NP)),1,1)+'.html">Page '+STRMID(STRCOMPRESS(round((NP+1))),1,1)
        PRINTF,1,'</a>'
      ENDFOR     
     end
    4: begin      ;;HALF SECOND
        PRINTF,1,'   <a href="'+SITE2+'.html">Page 1'
        PRINTF,1,'</a>'
        PRINTF,1,'  &nbsp;|&nbsp;
        PRINTF,1,'  <a href="Page1.html">Page 2
        PRINTF,1,'</a>
        PRINTF,1,'  <a href="Page2.html">Page 3
        PRINTF,1,'</a>
        PRINTF,1,'  <a href="Page3.html">Page 4
        PRINTF,1,'</a>
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  Page 5'

      FOR NP=5,NPG-1,1 DO BEGIN
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  <a href="Page'+STRMID(STRCOMPRESS(round(NP)),1,1)+'.html">Page '+STRMID(STRCOMPRESS(round((NP+1))),1,1)
        PRINTF,1,'</a>'
      ENDFOR     
     end
    5: begin      ;;HALF SECOND
        PRINTF,1,'   <a href="'+SITE2+'.html">Page 1'
        PRINTF,1,'</a>'
        PRINTF,1,'  &nbsp;|&nbsp;
        PRINTF,1,'  <a href="Page1.html">Page 2
        PRINTF,1,'</a>
        PRINTF,1,'  <a href="Page2.html">Page 3
        PRINTF,1,'</a>
        PRINTF,1,'  <a href="Page3.html">Page 4
        PRINTF,1,'</a>
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  Page 5'

      FOR NP=6,NPG-1,1 DO BEGIN
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  <a href="Page'+STRMID(STRCOMPRESS(round(NP)),1,1)+'.html">Page '+STRMID(STRCOMPRESS(round((NP+1))),1,1)
        PRINTF,1,'</a>'
      ENDFOR     
     end
    6: begin      ;;HALF SECOND
        PRINTF,1,'   <a href="'+SITE2+'.html">Page 1'
        PRINTF,1,'</a>'
        PRINTF,1,'  &nbsp;|&nbsp;
        PRINTF,1,'  <a href="Page1.html">Page 2
        PRINTF,1,'</a>
        PRINTF,1,'  <a href="Page2.html">Page 3
        PRINTF,1,'</a>
        PRINTF,1,'  <a href="Page3.html">Page 4
        PRINTF,1,'</a>
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  Page 6'

      FOR NP=7,NPG-1,1 DO BEGIN
        PRINTF,1,'  &nbsp;|&nbsp;'
        PRINTF,1,'  <a href="Page'+STRMID(STRCOMPRESS(round(NP)),1,1)+'.html">Page '+STRMID(STRCOMPRESS(round((NP+1))),1,1)
        PRINTF,1,'</a>'
      ENDFOR     
     end
 endcase

;PRINTF,1,'  Page 1'

;FOR NP=1,NPG-1,1 DO BEGIN
;PRINTF,1,'  &nbsp;|&nbsp;'
;PRINTF,1,'  <a href="Page'+STRMID(STRCOMPRESS(round(NP)),1,1)+'.html">Page '+STRMID(STRCOMPRESS(round((NP+1))),1,1)
;PRINTF,1,'</a>'
;ENDFOR   

PRINTF,1,'  <table cellspacing="2" cellpadding="2" width="100%">'

FOR IP=0,9,1 DO BEGIN
   IP1=(30*NMP)+(3*IP)+1 &  IP2=(30*NMP)+(3*IP)+2 &  IP3=(30*NMP)+(3*IP)+3 
   IP10=(30*NMP)+(3*IP)+0 &  IP20=(30*NMP)+(3*IP)+1 &  IP30=(30*NMP)+(3*IP)+2

;IF IP1 GT MAXL OR IP2 GT MAXL OR IP3 GT MAXL THEN GOTO,SKIPD  

   IF IP1 LT 10 THEN CDY1='00'+STRMID(STRCOMPRESS(round(IP1)),1,1) $
   ELSE IF IP1 GE 10 AND IP1 LT 100 THEN CDY1='0'+STRMID(STRCOMPRESS(round(IP1)),1,2) $
   ELSE IF IP1 GE 100 THEN CDY1=STRMID(STRCOMPRESS(round(IP1)),1,3) 

   IF IP2 LT 10 THEN CDY2='00'+STRMID(STRCOMPRESS(round(IP2)),1,1) $
   ELSE IF IP2 GE 10 AND IP2 LT 100 THEN CDY2='0'+STRMID(STRCOMPRESS(round(IP2)),1,2) $
   ELSE IF IP2 GE 100 THEN CDY2=STRMID(STRCOMPRESS(round(IP2)),1,3) 

   IF IP3 LT 10 THEN CDY3='00'+STRMID(STRCOMPRESS(round(IP3)),1,1) $
   ELSE IF IP3 GE 10 AND IP3 LT 100 THEN CDY3='0'+STRMID(STRCOMPRESS(round(IP3)),1,2) $
   ELSE IF IP3 GE 100 THEN CDY3=STRMID(STRCOMPRESS(round(IP3)),1,3) 

   IF IP10 LT 10 THEN CDY10='00'+STRMID(STRCOMPRESS(round(IP10)),1,1) $
   ELSE IF IP10 GE 10 AND IP10 LT 100 THEN CDY10='0'+STRMID(STRCOMPRESS(round(IP10)),1,2) $
   ELSE IF IP10 GE 100 THEN CDY10=STRMID(STRCOMPRESS(round(IP10)),1,3) 

   IF IP20 LT 10 THEN CDY20='00'+STRMID(STRCOMPRESS(round(IP20)),1,1) $
   ELSE IF IP20 GE 10 AND IP20 LT 100 THEN CDY20='0'+STRMID(STRCOMPRESS(round(IP20)),1,2) $
   ELSE IF IP20 GE 100 THEN CDY20=STRMID(STRCOMPRESS(round(IP20)),1,3) 

   IF IP30 LT 10 THEN CDY30='00'+STRMID(STRCOMPRESS(round(IP30)),1,1) $
   ELSE IF IP30 GE 10 AND IP30 LT 100 THEN CDY30='0'+STRMID(STRCOMPRESS(round(IP30)),1,2) $
   ELSE IF IP30 GE 100 THEN CDY30=STRMID(STRCOMPRESS(round(IP30)),1,3) 

PRINTF,1,'   <tr>'
IF IP1 GT MAXL THEN GOTO,SKIPD1  
PRINTF,1,'    <td align="center" width="33%">'
PRINTF,1,'     <a href="Image'+CDY10+'.html"><img height="180" alt="IMG'+CDY1+'.JPG" width="240" src="IMG'+CDY1+'.jpg"></a>'
PRINTF,1,'    </td>'
SKIPD1:
IF IP2 GT MAXL THEN GOTO,SKIPD2  
PRINTF,1,'    <td align="center" width="33%">'
PRINTF,1,'     <a href="Image'+CDY20+'.html"><img height="180" alt="IMG'+CDY2+'.JPG" width="240" src="IMG'+CDY2+'.jpg"></a>'
PRINTF,1,'    </td>'
SKIPD2:
IF IP3 GT MAXL THEN GOTO,SKIPD  
PRINTF,1,'    <td align="center" width="33%">'
PRINTF,1,'     <a href="Image'+CDY30+'.html"><img height="180" alt="IMG'+CDY3+'.JPG" width="240" src="IMG'+CDY3+'.jpg"></a>'
PRINTF,1,'    </td>'
PRINTF,1,'   </tr>'

SKIPD:
ENDFOR

PRINTF,1,'  </table>'
PRINTF,1,' </body>'
PRINTF,1,'</html>'

CLOSE,1
ENDFOR
END  