package com.engageai.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "campaigns")
public class Campaign {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String title;
    @Column(length=5000)
    private String content;
    private String platform;
    private String mediaUrl;
    private LocalDateTime scheduledAt;
    private String status;
    public Long getId(){return id;} public void setId(Long id){this.id=id;}
    public Long getUserId(){return userId;} public void setUserId(Long userId){this.userId=userId;}
    public String getTitle(){return title;} public void setTitle(String title){this.title=title;}
    public String getContent(){return content;} public void setContent(String content){this.content=content;}
    public String getPlatform(){return platform;} public void setPlatform(String platform){this.platform=platform;}
    public String getMediaUrl(){return mediaUrl;} public void setMediaUrl(String mediaUrl){this.mediaUrl=mediaUrl;}
    public LocalDateTime getScheduledAt(){return scheduledAt;} public void setScheduledAt(LocalDateTime scheduledAt){this.scheduledAt=scheduledAt;}
    public String getStatus(){return status;} public void setStatus(String status){this.status=status;}
}
