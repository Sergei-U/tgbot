package ru.skillfactorydemo.tgbot.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "ACTIVE_CHAT")
public class ActiveChat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "ID")
    private Long id;

    @Column(name = "CHAT_ID")
    @ApiModelProperty(value = "ID чата")
    private Long chatId;


}
