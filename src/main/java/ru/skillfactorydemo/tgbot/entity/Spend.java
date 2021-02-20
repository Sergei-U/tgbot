package ru.skillfactorydemo.tgbot.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "SPEND")
@Data
public class Spend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "ID входящие")
    private Long id;

    @Column(name = "CHAT_ID")
    @ApiModelProperty(value = "ID чата")
    private Long chatId;

    @Column(name = "SPEND")
    @ApiModelProperty(value = "BigDecimal расход денег")
    private BigDecimal spend;

    @Column(name = "DATE")
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateStart;

    @Column(name ="DATETIME")
    @Temporal(TemporalType.TIME)
    @DateTimeFormat(pattern = "HH:mm")
    private Date dateTime;
}
