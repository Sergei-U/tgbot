package ru.skillfactorydemo.tgbot.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "INCOME")
@Data
public class Income {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "ID входящие")
    private Long id;

    @Column(name = "CHAT_ID")
    @ApiModelProperty(value = "ID чата")
    private Long chatId;

    @Column(name = "INCOME")
    @ApiModelProperty(value = "BigDecimal входящие деньги")
    private BigDecimal income;
}
